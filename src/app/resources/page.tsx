import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Resources & Guides | SAK Fasteners - Installation, Selection, FAQs",
  description: "Download installation guides, material selection charts, load capacity specifications, and get answers to common fastener questions. Expert resources for professionals.",
  keywords: ["fastener installation guide", "screw selection guide", "anchor load capacity", "fastener FAQ", "technical specifications"],
  alternates: {
    canonical: "https://www.sakfasteners.com/resources",
  },
  openGraph: {
    title: "Technical Resources & Installation Guides | SAK Fasteners",
    description: "Expert guides, FAQs, and technical specifications to help you select and install the right fasteners for your project.",
    url: "https://www.sakfasteners.com/resources",
  },
};

const articles = [
  {
    title: "Torque chart by diameter and material",
    summary: "Engineers and installers can grab the exact torque values for stainless, alloy, and coated fasteners.",
    action: "Download PDF",
  },
  {
    title: "Material chooser: stainless vs alloy vs brass",
    summary: "Simple decision path with corrosion, strength, and cost notes plus a voice-ready summary for AEO.",
    action: "Open guide",
  },
  {
    title: "Coatings playbook: Zinc vs HDG vs PTFE",
    summary: "Performance breakdown with salt-spray benchmarks and torque impacts.",
    action: "Read article",
  },
];

const microFaqs = [
  {
    q: "Do you have downloadable spec sheets?",
    a: "Yes. Core SKUs include spec sheets with dimensions, coatings, and torque references.",
  },
  {
    q: "How do I request a new resource?",
    a: "Email sales@sakfasteners.com with the subject 'Resource Request' and we will publish within 3-5 business days.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <div className="badge">Resources</div>
        <h1 className="mt-3 text-3xl font-semibold">Guides and charts for fast answers</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          Content is structured for featured snippets and voice answers to support AEO and geo visibility while keeping procurement moving.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <div key={article.title} className="card-surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[var(--paper)]">{article.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{article.summary}</p>
            <div className="mt-4">
              <button
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-strong)] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--accent)] hover:text-white"
              >
                {article.action}
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {microFaqs.map((faq) => (
            <div key={faq.q} className="card-surface rounded-2xl p-4">
              <div className="text-sm font-semibold text-[var(--paper)]">{faq.q}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
