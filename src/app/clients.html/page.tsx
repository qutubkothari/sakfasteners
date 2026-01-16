"use client";

import { useEffect, useMemo, useState } from "react";

type ThreadListItem = {
  id: string;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  createdAt: string;
  reviewed: boolean;
  contacted: boolean;
  contactedAt?: string | null;
  messageCount: number;
  lastMessagePreview: string;
};

type ThreadFull = ThreadListItem & {
  messages: { id: string; role: "user" | "assistant"; content: string; createdAt: string }[];
};

function fmt(dt: string) {
  const d = new Date(dt);
  return d.toLocaleString();
}

export default function ClientsAdmin() {
  const [items, setItems] = useState<ThreadListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [statusReviewed, setStatusReviewed] = useState<string>("all"); // all|true|false
  const [statusContacted, setStatusContacted] = useState<string>("all"); // all|true|false
  const [selected, setSelected] = useState<ThreadFull | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (from) params.set("from", from);
      if (to) params.set("to", to);
      if (statusReviewed !== "all") params.set("reviewed", statusReviewed);
      if (statusContacted !== "all") params.set("contacted", statusContacted);

      const res = await fetch(`/api/threads?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load threads");
      const data = (await res.json()) as { items: ThreadListItem[] };
      setItems(data.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function openThread(id: string) {
    setSelected(null);
    try {
      const res = await fetch(`/api/threads/${id}`);
      if (!res.ok) throw new Error("Failed to load thread");
      const full = (await res.json()) as {
        id: string;
        name?: string | null;
        phone?: string | null;
        email?: string | null;
        createdAt: string;
        reviewed: boolean;
        contacted: boolean;
        contactedAt?: string | null;
        messages: { id: string; role: "user" | "assistant"; content: string; createdAt: string }[];
      };
      const mapped: ThreadFull = {
        id: full.id,
        name: full.name,
        phone: full.phone,
        email: full.email,
        createdAt: full.createdAt,
        reviewed: full.reviewed,
        contacted: full.contacted,
        contactedAt: full.contactedAt,
        messageCount: full.messages.length,
        lastMessagePreview: full.messages[full.messages.length - 1]?.content?.slice(0, 200) ?? "",
        messages: full.messages,
      };
      setSelected(mapped);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    }
  }

  async function updateStatus(id: string, patch: Partial<{ reviewed: boolean; contacted: boolean }>) {
    const res = await fetch(`/api/threads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) throw new Error("Update failed");
    await load();
    if (selected?.id === id) {
      void openThread(id);
    }
  }

  const total = items.length;
  const reviewedCount = useMemo(() => items.filter((i) => i.reviewed).length, [items]);
  const contactedCount = useMemo(() => items.filter((i) => i.contacted).length, [items]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-4 text-2xl font-bold">Clients Inbox</h1>
      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-4">
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="rounded border border-[var(--border)] px-3 py-2"
          placeholder="From"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="rounded border border-[var(--border)] px-3 py-2"
          placeholder="To"
        />
        <select
          value={statusReviewed}
          onChange={(e) => setStatusReviewed(e.target.value)}
          className="rounded border border-[var(--border)] px-3 py-2"
        >
          <option value="all">All Reviewed</option>
          <option value="true">Reviewed</option>
          <option value="false">Unreviewed</option>
        </select>
        <select
          value={statusContacted}
          onChange={(e) => setStatusContacted(e.target.value)}
          className="rounded border border-[var(--border)] px-3 py-2"
        >
          <option value="all">All Contacted</option>
          <option value="true">Contacted</option>
          <option value="false">Uncontacted</option>
        </select>
      </div>
      <div className="mb-3 flex items-center gap-3">
        <button
          className="rounded bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
          onClick={() => void load()}
        >
          Apply Filters
        </button>
        <div className="text-sm text-[var(--muted)]">Total: {total} • Reviewed: {reviewedCount} • Contacted: {contactedCount}</div>
      </div>
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
        <table className="w-full table-fixed text-left text-sm">
          <thead className="bg-[var(--bg)]">
            <tr>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Last Message</th>
              <th className="px-3 py-2">Count</th>
              <th className="px-3 py-2">Reviewed</th>
              <th className="px-3 py-2">Contacted</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={8} className="px-3 py-6 text-center text-[var(--muted)]">
                  Loading...
                </td>
              </tr>
            )}
            {!loading && items.length === 0 && (
              <tr>
                <td colSpan={8} className="px-3 py-6 text-center text-[var(--muted)]">
                  No conversations found.
                </td>
              </tr>
            )}
            {items.map((t) => (
              <tr key={t.id} className="border-t border-[var(--border)]">
                <td className="px-3 py-2 text-xs text-[var(--muted)]">{fmt(t.createdAt)}</td>
                <td className="px-3 py-2">{t.name || "—"}</td>
                <td className="px-3 py-2">{t.phone || "—"}</td>
                <td className="px-3 py-2">{t.email || "—"}</td>
                <td className="px-3 py-2 truncate" title={t.lastMessagePreview}>{t.lastMessagePreview}</td>
                <td className="px-3 py-2">{t.messageCount}</td>
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    checked={t.reviewed}
                    onChange={(e) => void updateStatus(t.id, { reviewed: e.target.checked })}
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    checked={t.contacted}
                    onChange={(e) => void updateStatus(t.id, { contacted: e.target.checked })}
                  />
                </td>
                <td className="px-3 py-2">
                  <button
                    className="rounded border border-[var(--border)] px-3 py-1 text-xs"
                    onClick={() => void openThread(t.id)}
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="mt-6 rounded-xl border border-[var(--border)] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Conversation</div>
              <div className="text-sm text-[var(--muted)]">{selected.name || "—"} • {selected.phone || "—"} • {selected.email || "—"}</div>
            </div>
            <button className="text-sm underline" onClick={() => setSelected(null)}>Close</button>
          </div>
          <div className="flex flex-col gap-2">
            {selected.messages.map((m) => (
              <div key={m.id} className={`max-w-[85%] rounded-lg px-3 py-2 ${m.role === "user" ? "bg-[var(--bg)]" : "bg-[#f5f7ff]"}`}>
                <div className="mb-1 text-[10px] uppercase tracking-wide text-[var(--muted)]">{m.role}</div>
                <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                <div className="mt-1 text-[10px] text-[var(--muted)]">{fmt(m.createdAt)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
