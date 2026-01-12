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
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 to-white px-6 py-10">
        <div className="badge">Request for Quotation</div>
        <h1 className="mt-3 text-4xl font-semibold">Get Bulk Pricing & OEM Quote</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          Submit your detailed requirements below. Our team responds within 24 hours with pricing, lead time, and shipping options for your destination.
        </p>
      </header>

      {/* B2B RFQ Form */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border-2 border-[var(--accent)]/30 bg-white px-8 py-8" id="rfq">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--paper)]">RFQ Form (For Serious Buyers)</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              This form is designed for bulk orders, container loads, and OEM inquiries. For small quantities, please call us directly.
            </p>
          </div>

          <form className="space-y-5">
            {/* Basic Info */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Company Name *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="Your Company"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Contact Person *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Email *</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="email@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Phone/WhatsApp *</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="+971 XX XXXXXXX"
                  required
                />
              </div>
            </div>

            {/* Product Requirements */}
            <div>
              <label className="block text-sm font-semibold text-[var(--paper)]">Product(s) Required *</label>
              <select
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                required
              >
                <option value="">Select Product Family</option>
                <option value="wood-screws">Wood Screws</option>
                <option value="chipboard-screws">Chipboard Screws</option>
                <option value="drywall-screws">Drywall Screws</option>
                <option value="self-tapping-screws">Self-Tapping Screws</option>
                <option value="wall-plugs">Standard Wall Plugs (Fischer Pattern)</option>
                <option value="frame-anchors">Nylon Frame Anchors</option>
                <option value="mixed">Mixed SKUs (Multiple Products)</option>
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Size/Specification *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="e.g., #8 x 1.25in, S8×40, 4.0mm x 50mm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Finish/Color *</label>
                <select
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  required
                >
                  <option value="">Select Finish</option>
                  <option value="yellow-zinc">Yellow Zinc</option>
                  <option value="silver-zinc">Silver Zinc</option>
                  <option value="black-zinc">Black Zinc/Phosphate</option>
                  <option value="plain">Plain (Unplated)</option>
                  <option value="stainless">Stainless Steel</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Quantity Required *</label>
                <select
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  required
                >
                  <option value="">Select Quantity Range</option>
                  <option value="1-pallet">1 Pallet (500kg - 1 ton)</option>
                  <option value="2-5-tons">2-5 Tons</option>
                  <option value="1-container">1 Container (20ft ~ 18-20 tons)</option>
                  <option value="2-containers">2+ Containers</option>
                  <option value="monthly-contract">Monthly Contract Supply</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Packaging Preference *</label>
                <select
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  required
                >
                  <option value="">Select Packaging</option>
                  <option value="bulk-25kg">Bulk (25kg cartons)</option>
                  <option value="retail-blister">Retail (Blister packs)</option>
                  <option value="retail-pouch">Retail (Plastic pouches)</option>
                  <option value="oem-custom">OEM Custom (Your Brand)</option>
                  <option value="neutral">Neutral/Generic</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Brand Type *</label>
                <select
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  required
                >
                  <option value="">Select Branding</option>
                  <option value="oem-private">OEM (Private Label - Your Brand)</option>
                  <option value="sak-brand">SAK Fasteners Brand</option>
                  <option value="neutral">Neutral (No Brand)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Destination Country *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="e.g., UAE, Saudi Arabia, Kenya"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Destination Port</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="e.g., Jebel Ali, Mombasa, Lagos"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--paper)]">Payment Terms *</label>
                <select
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  required
                >
                  <option value="">Select Terms</option>
                  <option value="lc">Letter of Credit (LC)</option>
                  <option value="tt-30-70">TT (30% Advance + 70% Pre-Ship)</option>
                  <option value="tt-100">TT (100% Advance)</option>
                  <option value="other">Other (Specify in notes)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--paper)]">Additional Notes</label>
              <textarea
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                placeholder="Technical specs, special requirements, target pricing, delivery timeline, certification needs, etc."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--accent-strong)] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[var(--accent)]"
            >
              Submit RFQ → Get Quote in 24 Hours
            </button>

            <p className="text-center text-xs text-[var(--muted)]">
              * Required fields | All inquiries are confidential | We respond within 24 business hours
            </p>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="card-surface rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[var(--paper)]">Direct Contact</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold text-[var(--muted)]">Sales & Export:</div>
                <a href="tel:+919106886259" className="text-[var(--accent-strong)] hover:underline">+91 91068 86259</a>
              </div>
              <div>
                <div className="font-semibold text-[var(--muted)]">Email:</div>
                <a href="mailto:info@sakfasteners.com" className="text-[var(--accent-strong)] hover:underline">info@sakfasteners.com</a>
              </div>
              <div>
                <div className="font-semibold text-[var(--muted)]">WhatsApp:</div>
                <a href="https://wa.me/919106886259" className="text-[var(--accent-strong)] hover:underline">+91 91068 86259</a>
              </div>
            </div>
          </div>

          {locations.map((loc) => (
            <div key={loc.id} className="card-surface rounded-2xl p-5">
              <div className="text-lg font-semibold text-[var(--paper)]">{loc.city}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{loc.address}</p>
              <p className="mt-2 text-sm text-[var(--paper)]">📞 {loc.phone}</p>
              <p className="text-sm text-[var(--paper)]">📧 {loc.email}</p>
            </div>
          ))}

          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-white p-5">
            <div className="text-sm font-semibold text-green-800">Response Time:</div>
            <p className="mt-2 text-sm text-green-700">
              • Email/RFQ: Within 24 hours<br />
              • WhatsApp: Same business day<br />
              • Phone: Instant (9 AM - 6 PM IST)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
