import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SAK Fasteners | Request Quote, Product Inquiry, Support",
  description: "Contact SAK Fasteners LLP for product quotes, bulk orders, and technical support. Phone: +91-91068-86259 | Email: info@sakfasteners.com | Pune, India office.",
  keywords: ["contact SAK Fasteners", "fastener quote request", "bulk order inquiry", "Pune fasteners supplier", "India Middle East fasteners"],
  alternates: {
    canonical: "https://www.sakfasteners.com/contact",
  },
  openGraph: {
    title: "Contact SAK Fasteners | Get Quote & Support",
    description: "Reach out for product quotes, technical support, and bulk orders. Serving India and Middle East with quality fasteners since 2014.",
    url: "https://www.sakfasteners.com/contact",
  },
};

const locations = [
  {
    id: "pune",
    city: "Pune, India (Head Office)",
    address: "Shed No 32, Next to Mohan Marble, Pisoli, Pune-411048",
    phone: "+91 91068 86259",
    email: "info@sakfasteners.com",
  },
  {
    id: "alternate",
    city: "Alternate Contact",
    address: "Pune, Maharashtra, India",
    phone: "+91 96654 52053",
    email: "info@saksolution.com",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <div className="badge">Contact</div>
        <h1 className="mt-3 text-3xl font-semibold">Get in Touch with SAK Fasteners</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          Contact us for product inquiries, bulk orders, or distributor partnerships. We serve customers across India and Middle East with quality fasteners at affordable prices.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-white px-6 py-6" id="rfq">
          <h2 className="text-xl font-semibold">Inquiry Form</h2>
          <form className="space-y-3">
            <input
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
              placeholder="Your Name"
            />
            <input
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
              placeholder="Your Email"
              type="email"
            />
            <input
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
              placeholder="Phone Number"
            />
            <textarea
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
              placeholder="Product inquiry, quantity requirements, delivery location..."
              rows={4}
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--accent-strong)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Submit Inquiry
            </button>
            <p className="text-xs text-[var(--muted)]">
              We respond to all inquiries promptly. For urgent requirements, please call us directly.
            </p>
          </form>
        </div>
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.id} id={loc.id} className="card-surface rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-[var(--paper)]">{loc.city}</div>
                  <p className="text-sm text-[var(--muted)]">{loc.address}</p>
                </div>
                <span className="rounded-full bg-[var(--accent)]/30 px-3 py-1 text-xs font-semibold text-[var(--paper)]">Location</span>
              </div>
              <p className="mt-2 text-sm text-[var(--paper)]">Address: {loc.address}</p>
              <p className="text-sm text-[var(--paper)]">Phone: {loc.phone}</p>
              <p className="text-sm text-[var(--paper)]">Email: {loc.email}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <div className="text-sm font-semibold text-[var(--paper)]">Social Media</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Follow us on Facebook, Instagram, and Twitter @sakfasteners for product updates and industry news.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
