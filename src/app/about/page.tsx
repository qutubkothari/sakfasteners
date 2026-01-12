import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SAK Fasteners LLP | Metal & Plastic Fasteners Manufacturer Since 2014",
  description:
    "SAK Fasteners LLP: ISO-focused manufacturer in Pune, India. 100% virgin materials, quality testing, IndiaMART & JustDial verified. Serving construction, uPVC, electrical industries across India and Middle East.",
  keywords: ["SAK Fasteners company", "fasteners manufacturer Pune", "quality fasteners India", "IndiaMART fasteners", "ISO fastener manufacturer"],
  alternates: {
    canonical: "https://www.sakfasteners.com/about",
  },
  openGraph: {
    title: "About SAK Fasteners | Trusted Manufacturer Since 2014",
    description: "Leading manufacturer of metal & plastic fasteners with state-of-the-art facility in Pune. Quality-driven, customer-focused, industry-verified.",
    url: "https://www.sakfasteners.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-10">
        <div className="badge">About Us</div>
        <h1 className="mt-3 text-4xl font-semibold">Manufacturing Excellence Since 2014</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          SAK Fasteners LLP is a trusted name in the fasteners industry, specializing in the manufacture of high-quality metal and plastic fastening solutions. With our state-of-the-art manufacturing facility in Pune, Maharashtra, we serve construction, sanitary, electrical, and industrial sectors across India and the Middle East.
        </p>
      </header>

      {/* Company Identity */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-[var(--paper)]">Vertically Integrated Manufacturing</h2>
          <div className="mt-4 space-y-3 text-[var(--muted)]">
            <p>
              Founded in 2014, SAK Fasteners LLP is a <strong className="text-[var(--paper)]">vertically integrated fastener & fixing systems manufacturer</strong> with complete in-house processes from raw steel to finished products. We control every stage of production to ensure consistent quality and rapid delivery.
            </p>
            <div className="mt-4 rounded-xl bg-[var(--accent)]/5 p-4">
              <h3 className="font-semibold text-[var(--paper)]">In-House Production Chain:</h3>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">Cold Heading</span>
                <span className="text-[var(--muted)]">→</span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">Thread Rolling</span>
                <span className="text-[var(--muted)]">→</span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">Heat Treatment</span>
                <span className="text-[var(--muted)]">→</span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">Electro-Plating</span>
                <span className="text-[var(--muted)]">→</span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">Plastic Injection</span>
                <span className="text-[var(--muted)]">→</span>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-white">OEM Packaging</span>
              </div>
            </div>
            <p className="mt-3">
              <strong className="text-[var(--paper)]">Zero job work dependency.</strong> Our self-reliant manufacturing ensures quality control, faster lead times, and competitive pricing for bulk orders.
            </p>
          </div>
        </div>

        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-[var(--paper)]">Production Capacity</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border-l-4 border-[var(--accent)] bg-[var(--accent)]/5 p-4">
              <div className="text-3xl font-bold text-[var(--accent-strong)]">100 Tons/Month</div>
              <div className="mt-1 text-sm text-[var(--muted)]">
                ≈ 28 Million Screws/Month | 4–5 Containers/Month
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--paper)]">Shift Operations:</h3>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                <li>✓ <strong>Screw Manufacturing:</strong> 2 × 8-hour shifts (16 hrs/day)</li>
                <li>✓ <strong>Plastic Injection:</strong> 24-hour continuous operation</li>
              </ul>
            </div>
            <div className="mt-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4">
              <div className="text-sm font-semibold text-green-800">Export-Ready Capabilities:</div>
              <ul className="mt-2 space-y-1 text-xs text-green-700">
                <li>✓ OEM Private Label Packaging</li>
                <li>✓ Mixed Container Loads (FCL)</li>
                <li>✓ Custom Branding & Cartons</li>
                <li>✓ Middle East & Africa Export</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery & Equipment Inventory */}
      <section className="rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <h2 className="text-2xl font-semibold">Machinery & In-House Capability</h2>
        <p className="mt-2 text-[var(--muted)]">
          Complete production ecosystem with zero dependency on job work
        </p>
        
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Screw Manufacturing */}
          <div className="rounded-2xl border-2 border-[var(--accent)]/20 bg-gradient-to-br from-[var(--accent)]/5 to-transparent p-6">
            <h3 className="text-lg font-semibold text-[var(--accent-strong)]">🔩 Screw Manufacturing Line</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">12</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Cold Heading Machines</div>
                  <p className="text-sm text-[var(--muted)]">Multi-station progressive heading for wood screws, drywall, chipboard</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">✓</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Thread Rolling (Integrated)</div>
                  <p className="text-sm text-[var(--muted)]">Rolled threads for higher strength vs. cut threads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">2</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Heat Treatment Furnaces</div>
                  <p className="text-sm text-[var(--muted)]">Rotary + Flat Bed | Case Hardening ~0.30mm depth</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">4</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Zinc Electro-Plating Line</div>
                  <p className="text-sm text-[var(--muted)]">Min 8μm thickness | 100+ hrs salt spray tested</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plastic Injection */}
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-transparent p-6">
            <h3 className="text-lg font-semibold text-blue-800">🧱 Plastic Injection Molding</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Injection Molding Machines</div>
                  <p className="text-sm text-[var(--muted)]">24/7 continuous operation for wall plugs & anchors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">48</div>
                <div>
                  <div className="font-semibold text-[var(--paper)]">Mold Cavities (12–48 per cycle)</div>
                  <p className="text-sm text-[var(--muted)]">High-volume production of Fischer-pattern wall plugs</p>
                </div>
              </div>
              <div className="rounded-lg bg-white/80 p-3">
                <div className="text-xs font-semibold text-[var(--paper)]">Raw Materials:</div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  PPCP / HDPE (100% Virgin Grade) • Tier-2 General-Purpose Fixing Grade
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-gradient-to-r from-[var(--accent)]/10 to-blue-50 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent-strong)]">SAE 1008 / 1018</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Steel Grades (Low/Medium Carbon)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent-strong)]">HRC 50–52</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Surface Hardness (Case Hardened)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--accent-strong)]">DIN 7504/7505</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Self-Drilling Screw Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Technical Specifications */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Technical Specifications & Quality Standards</h2>
        
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Threading Process */}
          <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-5">
            <h3 className="text-lg font-semibold text-green-800">⚙️ Thread Rolling</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <p><strong className="text-[var(--paper)]">Process:</strong> Rolled Threads (not cut)</p>
              <p><strong className="text-[var(--paper)]">Advantage:</strong> Higher strength due to grain flow retention</p>
              <p className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">Applied to all screw SKUs</p>
            </div>
          </div>

          {/* Heat Treatment */}
          <div className="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5">
            <h3 className="text-lg font-semibold text-orange-800">🔥 Heat Treatment</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <p><strong className="text-[var(--paper)]">Type:</strong> Case Hardening</p>
              <p><strong className="text-[var(--paper)]">Case Depth:</strong> ~0.30mm</p>
              <p><strong className="text-[var(--paper)]">Result:</strong> Hard shell + ductile core</p>
              <p className="text-xs">Prevents head shearing, improves thread bite in gypsum/MDF/chipboard</p>
            </div>
          </div>

          {/* Plating & Corrosion */}
          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
            <h3 className="text-lg font-semibold text-blue-800">🛡️ Corrosion Protection</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <p><strong className="text-[var(--paper)]">Finish:</strong> Zinc (Silver / Yellow)</p>
              <p><strong className="text-[var(--paper)]">Thickness:</strong> Min 8μm</p>
              <p><strong className="text-[var(--paper)]">Salt Spray:</strong> 100+ Hours</p>
              <p className="text-xs">Suitable for indoor construction: drywall, ceilings, partitions, MEP</p>
            </div>
          </div>
        </div>

        {/* Metallurgy Table */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="mb-4 text-lg font-semibold text-[var(--paper)]">Material & Heat Treatment Specifications</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--accent)] text-white">
                <th className="px-4 py-2 text-left">Material Type</th>
                <th className="px-4 py-2 text-left">Grade</th>
                <th className="px-4 py-2">Surface HRC</th>
                <th className="px-4 py-2">Core HRC</th>
                <th className="px-4 py-2 text-left">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr className="bg-green-50">
                <td className="px-4 py-3">Low-Carbon Steel</td>
                <td className="px-4 py-3 font-semibold">SAE 1008</td>
                <td className="px-4 py-3 text-center">50</td>
                <td className="px-4 py-3 text-center">30</td>
                <td className="px-4 py-3">Wood Screws, Gypsum Board Fixing</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-3">Medium-Carbon Steel</td>
                <td className="px-4 py-3 font-semibold">SAE 1018</td>
                <td className="px-4 py-3 text-center">52</td>
                <td className="px-4 py-3 text-center">32</td>
                <td className="px-4 py-3">Drywall, Chipboard, Light Steel Keel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3">Stainless Steel</td>
                <td className="px-4 py-3 font-semibold">304</td>
                <td className="px-4 py-3 text-center">48</td>
                <td className="px-4 py-3 text-center">28</td>
                <td className="px-4 py-3">Humid Areas (Bathrooms, Kitchens)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-[var(--muted)]">
            * SAK Fasteners specializes in Low-Carbon & Medium-Carbon case-hardened zinc-plated screws for interior construction applications.
          </p>
        </div>

        {/* Standards Compliance */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[var(--paper)]">Manufacturing Standards</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ IS 1367 compliant for technical supply conditions</li>
              <li>✓ DIN 7504, DIN 7505 standards for self-drilling screws</li>
              <li>✓ ISO metric threading for precision fit</li>
              <li>✓ 100% virgin HDPE/PPCP for plastic wall plugs</li>
              <li>✓ Fischer-pattern compatibility for wall plugs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--paper)]">Quality Control Testing</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Hardness testing: HRC 28-38 for steel screws</li>
              <li>✓ Tensile strength and shear load verification</li>
              <li>✓ Thread pitch gauge inspection per batch</li>
              <li>✓ Salt spray testing (96+ hours for plated products)</li>
              <li>✓ Dimensional accuracy verification (±0.05mm tolerance)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="rounded-3xl border-2 border-[var(--accent)]/30 bg-gradient-to-br from-white to-[var(--bg)] px-6 py-8">
        <div className="text-center">
          <div className="inline-block rounded-full bg-[var(--accent)] px-4 py-1 text-sm font-semibold text-white">
            Market Position
          </div>
          <h2 className="mt-4 text-2xl font-semibold">Tier-2 Volume Manufacturer for Construction & Fit-Out</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[var(--muted)]">
            We specialize in <strong className="text-[var(--paper)]">high-volume commercial construction fasteners</strong> for interior fit-out, drywall systems, MEP/HVAC, and general-purpose fixing applications across Middle East & Africa markets.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* What We Do */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold text-green-700">✓ Our Expertise</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ <strong className="text-[var(--paper)]">Drywall systems</strong> – Case-hardened screws for gypsum board</li>
              <li>✓ <strong className="text-[var(--paper)]">Light steel keel systems</strong> – Self-drilling/self-tapping screws</li>
              <li>✓ <strong className="text-[var(--paper)]">MDF/Chipboard/Plywood</strong> – Wood screws with optimized threads</li>
              <li>✓ <strong className="text-[var(--paper)]">Interior fit-out</strong> – Wall plugs, frame anchors, rack bolts</li>
              <li>✓ <strong className="text-[var(--paper)]">MEP/HVAC fastening</strong> – Zinc-plated indoor-grade screws</li>
              <li>✓ <strong className="text-[var(--paper)]">Electrical & plumbing</strong> – General-purpose plastic fixings</li>
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6\">
            <h3 className="text-lg font-semibold text-red-700">⚠ Not Our Segment</h3>
            <ul className="mt-4 space-y-2 text-sm text-red-600">
              <li>❌ Seismic anchoring / ETA-certified structural anchors</li>
              <li>❌ Exterior structural steel applications</li>
              <li>❌ Marine/chemical/high-corrosion environments</li>
              <li>❌ Dynamic seismic loading applications</li>
              <li>❌ Through-bolting for heavy machinery</li>
            </ul>
            <p className="mt-4 text-xs text-red-700">
              <strong>Note:</strong> We are <u>not</u> Hilti, Würth, Fischer, or ETA/CE seismic anchor OEM. Our products are positioned for <strong>Tier-2 volume construction markets</strong> with cost-effective, reliable fixing solutions.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[var(--accent)]/10 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-xl font-bold text-[var(--accent-strong)]">Middle East & Africa</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Primary Export Markets</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[var(--accent-strong)]">OEM + Private Label</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Custom Branding Available</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[var(--accent-strong)]">FCL / Mixed Loads</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Flexible Container Packing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Presence */}
      <section className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Trusted on Leading B2B Platforms</h2>
          <p className="mt-2 text-[var(--muted)]">
            Find us on India&apos;s most trusted business directories
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card-surface rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[var(--paper)]">IndiaMART</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Verified supplier on India&apos;s largest B2B marketplace
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    ✓ Verified Supplier
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Active Seller
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--paper)]">
              Search for &quot;SAK Fasteners&quot; on IndiaMART to view our complete product catalog, customer reviews, and request quotes directly.
            </p>
          </div>

          <div className="card-surface rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[var(--paper)]">JustDial</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Listed business with verified contact details
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    4.0+ Rated
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    Verified Business
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--paper)]">
              Find SAK Fasteners LLP on JustDial for instant contact, business hours, customer ratings, and location details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold text-white">Partner with a Reliable Manufacturer</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          Experience the difference of working with a quality-focused fastener manufacturer. From bulk orders to custom requirements, we deliver on time, every time.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[var(--accent-strong)] transition hover:bg-white/90"
          >
            Contact Our Team
          </Link>
          <Link
            href="/products"
            className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}
