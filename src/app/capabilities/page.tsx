import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | SAK Fasteners Production Facility",
  description: "100 tons/month production capacity. 12 cold heading lines, 2 heat treatment furnaces, 4-bucket zinc plating, 3 injection molding machines. SAE 1008/1018 steel, case hardening, 8μm zinc plating, 100+ hrs salt spray.",
  keywords: ["manufacturing capability", "cold heading", "heat treatment", "zinc plating", "injection molding", "production capacity", "fastener manufacturing"],
  alternates: {
    canonical: "https://www.sakfasteners.com/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 to-white px-6 py-10">
        <div className="badge">Production Capabilities</div>
        <h1 className="mt-3 text-4xl font-semibold">Vertically Integrated Manufacturing Facility</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          Complete in-house production from raw steel to finished packaged goods. Zero dependency on job work ensures consistent quality, rapid lead times, and competitive pricing for bulk orders.
        </p>
      </header>

      {/* Materials */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Raw Materials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/5 to-white p-6">
            <h3 className="text-xl font-semibold text-[var(--accent-strong)]">Steel Grades</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                <span className="font-semibold text-[var(--paper)]">SAE 1008</span>
                <span className="text-sm text-[var(--muted)]">Wood Screws (Low-Carbon)</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                <span className="font-semibold text-[var(--paper)]">SAE 1018</span>
                <span className="text-sm text-[var(--muted)]">Drywall/Chipboard (Medium-Carbon)</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <h3 className="text-xl font-semibold text-blue-800">Plastic Materials</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                <span className="font-semibold text-[var(--paper)]">PPCP / HDPE</span>
                <span className="text-sm text-[var(--muted)]">Wall Plugs (100% Virgin)</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                <span className="font-semibold text-[var(--paper)]">Nylon 6</span>
                <span className="text-sm text-[var(--muted)]">Frame Anchors (General-Purpose)</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-blue-700">Tier-2 construction grade | Not ETA/CE seismic grade</p>
          </div>
        </div>
      </section>

      {/* Production Processes */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Production Processes</h2>
        
        <div className="mt-6 space-y-6">
          {/* Case Hardening */}
          <div className="rounded-xl border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-white p-6">
            <h3 className="text-xl font-semibold text-orange-800">🔥 Heat Treatment (Case Hardening)</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Case Depth</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">~0.30mm</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Surface Hardness</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">HRC 50-52</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Core Hardness</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">HRC 30-32</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-orange-700">
              Hard shell + ductile core prevents head shearing and improves thread bite in gypsum/MDF/chipboard substrates
            </p>
          </div>

          {/* Zinc Plating */}
          <div className="rounded-xl border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white p-6">
            <h3 className="text-xl font-semibold text-blue-800">🛡️ Electro-Plating (Zinc)</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Plating Thickness</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">Min 8μm</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Salt Spray Test</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">100+ Hours</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Finish Options</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">Silver / Yellow</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-blue-700">
              Suitable for indoor construction: drywall, ceilings, partitions, fit-outs, furniture, MEP/M&E
            </p>
          </div>

          {/* Thread Rolling */}
          <div className="rounded-xl border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-white p-6">
            <h3 className="text-xl font-semibold text-green-800">⚙️ Thread Rolling</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Process Type</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">Rolled Threads</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Advantage</div>
                <div className="mt-1 text-sm text-[var(--paper)]">Higher strength vs. cut threads</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-green-700">
              Grain flow retention through cold forming provides superior tensile strength. Applied to all screw SKUs.
            </p>
          </div>

          {/* Plastic Molding */}
          <div className="rounded-xl border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-white p-6">
            <h3 className="text-xl font-semibold text-purple-800">🧱 Plastic Injection Molding</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Mold Cavities</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">12-48 Cavities</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Operation</div>
                <div className="mt-1 font-mono text-lg text-[var(--paper)]">24/7 Continuous</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--muted)]">Products</div>
                <div className="mt-1 text-sm text-[var(--paper)]">Wall Plugs + Anchors</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-purple-700">
              High-volume production of Fischer-pattern wall plugs in 100% virgin PPCP/HDPE material
            </p>
          </div>
        </div>
      </section>

      {/* Machinery & Capacity */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Machinery & Production Capacity</h2>
        
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-white p-5 text-center">
            <div className="text-4xl font-bold text-[var(--accent-strong)]">12</div>
            <div className="mt-2 text-sm font-semibold text-[var(--paper)]">Cold Heading Lines</div>
            <div className="mt-1 text-xs text-[var(--muted)]">Multi-station progressive</div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-orange-100 to-white p-5 text-center">
            <div className="text-4xl font-bold text-orange-700">2</div>
            <div className="mt-2 text-sm font-semibold text-[var(--paper)]">Heat Treatment Furnaces</div>
            <div className="mt-1 text-xs text-[var(--muted)]">Rotary + Flat Bed</div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-100 to-white p-5 text-center">
            <div className="text-4xl font-bold text-blue-700">4</div>
            <div className="mt-2 text-sm font-semibold text-[var(--paper)]">Zinc Plating Buckets</div>
            <div className="mt-1 text-xs text-[var(--muted)]">Electro-plating line</div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-purple-100 to-white p-5 text-center">
            <div className="text-4xl font-bold text-purple-700">3</div>
            <div className="mt-2 text-sm font-semibold text-[var(--paper)]">Injection Molding Machines</div>
            <div className="mt-1 text-xs text-[var(--muted)]">12-48 cavity molds</div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--accent)]/5 to-white p-6">
          <h3 className="text-center text-xl font-semibold text-[var(--accent-strong)]">Total Production Capacity</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--paper)]">100 Tons/Month</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Screws & Fixings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--paper)]">~28M Units/Month</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Average Screw Count</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--paper)]">4-5 Containers</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Monthly Export Volume</div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-green-50 p-5">
          <h4 className="font-semibold text-green-900">Shift Operations:</h4>
          <div className="mt-2 space-y-1 text-sm text-green-800">
            <div>• <strong>Screw Manufacturing:</strong> 2 × 8-hour shifts (16 hrs/day)</div>
            <div>• <strong>Plastic Injection:</strong> 24-hour continuous operation</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Bulk Orders & OEM Welcome</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
          Our vertically integrated facility enables competitive pricing, consistent quality, and flexible MOQs for export buyers.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/oem-export"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[var(--accent-strong)] transition hover:bg-white/90"
          >
            View OEM & Export Info →
          </Link>
          <Link
            href="/contact#rfq"
            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Request Quotation →
          </Link>
        </div>
      </section>
    </div>
  );
}
