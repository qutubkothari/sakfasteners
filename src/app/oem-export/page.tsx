import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OEM & Export | SAK Fasteners Private Label Manufacturing",
  description: "OEM private label fasteners for Middle East & Africa. Mixed containers, custom packaging, flexible MOQ. FOB Nhava Sheva/Mundra. 30-45 day lead time. Payment: LC, TT.",
  keywords: ["OEM fasteners", "private label", "export fasteners", "mixed container", "custom packaging", "Middle East export", "Africa fasteners"],
  alternates: {
    canonical: "https://www.sakfasteners.com/oem-export",
  },
};

export default function OEMExportPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 to-white px-6 py-10">
        <div className="badge">Export & Private Label</div>
        <h1 className="mt-3 text-4xl font-semibold">OEM & Export Services</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          Vertically integrated manufacturing enables OEM private label packaging, mixed container loads, and competitive export pricing for Middle East & African markets.
        </p>
      </header>

      {/* OEM Capabilities */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">OEM Private Label Capabilities</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-white p-6">
            <div className="text-3xl">📦</div>
            <h3 className="mt-3 font-semibold text-[var(--paper)]">Custom Packaging</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Your brand name, logo, and specifications on boxes, cartons, and bulk packaging. Blister packs, plastic pouches, cardboard boxes available.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="text-3xl">🏷️</div>
            <h3 className="mt-3 font-semibold text-[var(--paper)]">Brand Customization</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              OEM branding or neutral/generic packaging. Custom labels, stickers, and product literature printing in-house.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-6">
            <div className="text-3xl">📋</div>
            <h3 className="mt-3 font-semibold text-[var(--paper)]">SKU Flexibility</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Mix multiple product SKUs in one container. Pallet loads or full container loads (FCL). Tailored to your market demand.
            </p>
          </div>
        </div>
      </section>

      {/* Ports & Logistics */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Ports & Logistics</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[var(--accent)]/30 bg-white p-6">
            <h3 className="text-lg font-semibold text-[var(--accent-strong)]">Loading Ports (India)</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">1</span>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Nhava Sheva (JNPT)</div>
                  <div className="text-xs text-[var(--muted)]">Primary export port | 400km from Ahmedabad</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">2</span>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Mundra Port</div>
                  <div className="text-xs text-[var(--muted)]">Gujarat | GCC route alternative</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <h3 className="text-lg font-semibold text-blue-800">Container Options</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="font-semibold text-[var(--paper)]">20ft Container (FCL)</div>
                <div className="text-xs text-[var(--muted)]">~18-20 tons capacity</div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="font-semibold text-[var(--paper)]">40ft Container (FCL)</div>
                <div className="text-xs text-[var(--muted)]">~26-28 tons capacity</div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="font-semibold text-[var(--paper)]">Mixed SKU Loads</div>
                <div className="text-xs text-[var(--muted)]">Multiple products in one container</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Terms */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Payment Terms & Lead Time</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-5">
            <h3 className="text-sm font-semibold uppercase text-green-800">Payment Methods</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--paper)]">
              <div>✓ Letter of Credit (LC)</div>
              <div>✓ Telegraphic Transfer (TT)</div>
              <div>✓ 30% Advance + 70% Pre-Ship</div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-800">Lead Time</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--paper)]">
              <div>Standard Orders: <strong>30 days</strong></div>
              <div>OEM Packaging: <strong>45 days</strong></div>
              <div>Rush Orders: Contact us</div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-5">
            <h3 className="text-sm font-semibold uppercase text-purple-800">MOQ (Minimum Order)</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--paper)]">
              <div>Container: <strong>5 tons</strong></div>
              <div>Per SKU: <strong>500 kg</strong></div>
              <div>Flexible for repeat buyers</div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-5">
            <h3 className="text-sm font-semibold uppercase text-orange-800">Incoterms</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--paper)]">
              <div>✓ FOB (Nhava Sheva/Mundra)</div>
              <div>✓ CIF (negotiable)</div>
              <div>✓ CFR (on request)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Export Markets Served</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { region: "GCC (Middle East)", countries: "UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain" },
            { region: "East Africa", countries: "Kenya, Tanzania, Uganda, Ethiopia" },
            { region: "West Africa", countries: "Nigeria, Ghana, Ivory Coast" },
            { region: "North Africa", countries: "Egypt, Morocco, Algeria" },
            { region: "South Asia", countries: "Bangladesh, Sri Lanka, Nepal" },
            { region: "Other Regions", countries: "Contact for specific destinations" },
          ].map((market, i) => (
            <div key={i} className="rounded-xl border-2 border-[var(--accent)]/20 bg-white p-5">
              <h3 className="font-semibold text-[var(--accent-strong)]">{market.region}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{market.countries}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-[var(--accent)]/10 p-5">
          <p className="text-center text-sm text-[var(--paper)]">
            <strong>Primary Focus:</strong> Tier-2 construction & fit-out markets in Middle East and Africa. 
            High-volume commercial construction fasteners for drywall, MEP, furniture, and general-purpose fixing applications.
          </p>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Packaging Options</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-[var(--paper)]">Retail Packaging</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Blister packs (hanging display)</li>
              <li>✓ Plastic pouches (zipper/heat-seal)</li>
              <li>✓ Small cardboard boxes (10-100 pcs)</li>
              <li>✓ Custom printed with your brand</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-[var(--paper)]">Bulk Packaging</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ 25kg cartons</li>
              <li>✓ Polybags (5kg, 10kg, 25kg)</li>
              <li>✓ Neutral or OEM branded</li>
              <li>✓ Palletized for container loading</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-[var(--paper)]">Trade Packaging</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Master cartons (trade counter)</li>
              <li>✓ Assorted size packs</li>
              <li>✓ Display-ready merchandising</li>
              <li>✓ Custom labeling & barcodes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Ready for Your OEM Inquiry?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
          Request a quotation with your specific requirements: SKUs, quantities, packaging, destination port, and payment terms. We respond within 24 hours.
        </p>
        <div className="mt-8">
          <Link
            href="/contact#rfq"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[var(--accent-strong)] transition hover:bg-white/90"
          >
            Submit RFQ (Request for Quotation) →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div>📧 <a href="mailto:info@sakfasteners.com" className="underline hover:text-white">info@sakfasteners.com</a></div>
          <div>📞 <a href="tel:+919106886259" className="underline hover:text-white">+91 91068 86259</a></div>
          <div>📱 <a href="https://wa.me/919106886259" className="underline hover:text-white">WhatsApp</a></div>
        </div>
      </section>
    </div>
  );
}
