import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | SAK Fasteners - Construction, uPVC, Electrical",
  description: "Specialized fastening solutions for Construction & Infrastructure, Electrical & Sanitary, Furniture & Interior, uPVC Window Systems, Metal Fabrication, and Automotive industries.",
  keywords: ["construction fasteners", "uPVC window fasteners", "electrical mounting solutions", "sanitary installation hardware", "furniture assembly screws"],
  alternates: {
    canonical: "https://www.sakfasteners.com/industries",
  },
  openGraph: {
    title: "Industries Served | SAK Fasteners Solutions",
    description: "From construction to uPVC window systems, we provide industry-specific fastening solutions with quality materials and expert support.",
    url: "https://www.sakfasteners.com/industries",
  },
};

const industryBlocks = [
  {
    title: "Energy / Oil & Gas",
    focus: "Corrosion resistance, heat tolerance, spec compliance",
    delivery: "316/321 stainless, PTFE, HDG, duplex options with mill certs and heat numbers on every lot.",
  },
  {
    title: "Construction & Infrastructure",
    focus: "Structural compliance and site logistics",
    delivery: "A325/A490 structural assemblies, anchors with seismic approvals, staged releases per project site.",
  },
  {
    title: "Automotive & Rail",
    focus: "Traceability and cycle reliability",
    delivery: "PPAP-ready docs, lot coding, torque references, patch and coating matched to line requirements.",
  },
  {
    title: "Marine & Offshore",
    focus: "Salt-spray performance and safety",
    delivery: "316/duplex stainless and ceramic coatings with tensile and salt-spray data on request.",
  },
  {
    title: "Heavy Machinery",
    focus: "Shock, vibration, uptime",
    delivery: "Socket and flange hardware with locking features, kitted for line-side replenishment.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="space-y-12">
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <div className="badge">Industries</div>
        <h1 className="mt-3 text-3xl font-semibold">Aligned to your environment</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          We adapt coatings, documentation, and delivery cadence to each sector while keeping the maroon, red, and white brand language consistent.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {industryBlocks.map((ind) => (
          <div key={ind.title} className="card-surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[var(--paper)]">{ind.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Focus: {ind.focus}</p>
            <p className="mt-3 text-sm text-[var(--paper)]">Delivery: {ind.delivery}</p>
          </div>
        ))}
      </section>

      <section className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-8">
        <h2 className="text-2xl font-semibold">Project playbook</h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--paper)]">
          <li>Site-aligned staging to cut crane and crew idle time.</li>
          <li>QA packets with mill certs, torque specs, and coating guidance for installers.</li>
          <li>Rapid RFQ responses designed for AEO and geo searches with concise answers.</li>
        </ul>
      </section>
    </div>
  );
}
