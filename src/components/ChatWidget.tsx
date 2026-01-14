"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi, I am SAK Fasteners' assistant. Tell me your application, size, and quantity. I can share specs, recommend products, and arrange a WhatsApp follow-up.",
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isBrowser()) return;
    const stored = localStorage.getItem("sak-chat-thread-id");
    if (stored) setThreadId(stored);
  }, []);

  useEffect(() => {
    if (!isBrowser()) return;
    if (threadId) {
      localStorage.setItem("sak-chat-thread-id", threadId);
    }
  }, [threadId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const canSend = useMemo(() => input.trim().length > 0 && !isSending, [input, isSending]);

  async function sendMessage() {
    if (!canSend) return;
    setIsSending(true);
    setError(null);

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          threadId: threadId ?? undefined,
          name: name.trim() || undefined,
          phone: phone.trim() || undefined,
          source: "web",
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Unable to send message");
      }

      const payload = (await response.json()) as { threadId: string; reply: string };
      setThreadId(payload.threadId);
      setMessages((prev) => [...prev, { role: "assistant", content: payload.reply }]);
      setInput("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSending(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[360px] max-w-[92vw] overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl shadow-[var(--accent)]/15">
          <div className="flex items-start justify-between gap-3 bg-[var(--accent-strong)] px-4 py-3 text-white">
            <div>
              <div className="text-sm font-semibold">SAK Fasteners Assistant</div>
              <div className="text-xs opacity-80">Human-like replies. Ask me anything about fasteners.</div>
            </div>
            <button
              className="rounded-full bg-white/15 px-2 py-1 text-xs font-semibold hover:bg-white/25"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-3 px-4 py-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-xs text-[var(--muted)]">
              <input
                className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-[var(--paper)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-[var(--paper)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Phone with country code"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="text-[11px] text-[var(--muted)]">
              By chatting you agree to store your messages for support and faster follow-up. WhatsApp handoff available on request.
            </div>
          </div>

          <div className="max-h-[360px] min-h-[220px] overflow-y-auto border-y border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm">
            <div className="flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div
                  key={`${msg.role}-${idx}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[var(--accent)] text-white"
                        : "bg-white text-[var(--paper)] border border-[var(--border)]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <div className="flex flex-col gap-2 px-4 py-3">
            {error && <div className="text-xs text-red-600">{error}</div>}
            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--paper)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Ask about specs, pricing, delivery..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
              />
              <button
                className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--accent-strong)] disabled:opacity-60"
                onClick={() => void sendMessage()}
                disabled={!canSend}
              >
                {isSending ? "..." : "Send"}
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
              <button
                className="underline hover:text-[var(--paper)]"
                onClick={() => window.open("https://wa.me/919106886259", "_blank")}
              >
                WhatsApp our team
              </button>
              <div>Avg reply &lt; 10s</div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-[var(--accent)]/25 transition hover:bg-[var(--accent-strong)]"
      >
        <span>{isOpen ? "Hide Assistant" : "Chat with us"}</span>
        <span className="h-2 w-2 rounded-full bg-green-300" aria-hidden />
      </button>
    </div>
  );
}
