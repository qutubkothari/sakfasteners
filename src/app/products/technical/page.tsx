import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Specifications | SAK Fasteners Product Data Sheets",
  description: "Detailed technical specifications for wood screws, drywall screws, chipboard screws, self-tapping screws, wall plugs, and frame anchors. Material grades, heat treatment, plating specs, and load capacities.",
  keywords: ["technical specifications", "fastener datasheets", "SAE 1008", "SAE 1018", "case hardening", "zinc plating", "thread rolling", "Fischer pattern wall plugs"],
  alternates: {
    canonical: "https://www.sakfasteners.com/products/technical",
  },
};

export default function TechnicalPage() {
  const screwProducts = [
    {
      name: "Wood Screws",
      material: "SAE 1008 (Low-Carbon Steel)",
      threading: "Rolled Threads",
      heatTreatment: "Case Hardening ~0.30mm",
      hardness: "Surface HRC 50 | Core HRC 30",
      plating: "Zinc (8μm min) | 100+ hrs salt spray",
      sizes: "#6, #8, #10, #12 (3/4\" to 3\" lengths)",
      applications: "Wooden furniture, carpentry, MDF assembly",
    },
    {
      name: "Drywall Screws",
      material: "SAE 1018 (Medium-Carbon Steel)",
      threading: "Rolled Threads (Fine Pitch)",
      heatTreatment: "Case Hardening ~0.30mm",
      hardness: "Surface HRC 52 | Core HRC 32",
      plating: "Black Zinc / Yellow Zinc (8μm min)",
      sizes: "#6 x 1\", #6 x 1.25\", #6 x 1.625\", #8 x 1.25\"",
      applications: "Gypsum board, plasterboard, ceiling systems",
    },
    {
      name: "Chipboard Screws",
      material: "SAE 1018 (Medium-Carbon Steel)",
      threading: "Rolled Threads (Coarse Pitch)",
      heatTreatment: "Case Hardening ~0.30mm",
      hardness: "Surface HRC 52 | Core HRC 32",
      plating: "Yellow Zinc (8μm min) | 100+ hrs salt spray",
      sizes: "3.5mm, 4.0mm, 4.5mm, 5.0mm (various lengths)",
      applications: "Particle board, MDF, chipboard, melamine panels",
    },
    {
      name: "Self-Tapping Screws",
      material: "MS / SS 202 / SS 304 / SS 316",
      threading: "Rolled Threads (Thread-Forming)",
      heatTreatment: "Case Hardening (MS Only)",
      hardness: "MS: HRC 50-52 | SS: As-rolled",
      plating: "MS: Zinc 8μm | SS: Passivated",
      sizes: "ST2.9, ST3.5, ST4.2, ST4.8 (10-50mm)",
      applications: "Sheet metal, plastic enclosures, HVAC ducts",
    },
  ];

  const plasticProducts = [
    {
      name: "Standard Wall Plugs (Fischer Pattern)",
      material: "PPCP / HDPE (100% Virgin Grade)",
      color: "Light Grey (Standard), Color-coded options",
      sizes: "S6×30, S8×40, S10×50, S12×60, S14×70",
      loadCapacity: "5-20kg depending on wall type",
      applications: "Interior fit-out, electrical/plumbing, furniture mounting",
      features: "4-way expansion, anti-rotation ribs, collar flange",
    },
    {
      name: "Nylon Frame Anchors (General-Purpose)",
      material: "HDPE / Nylon 6 (General-Purpose Grade)",
      sizes: "6×40, 6×60, 8×60, 8×80, 8×100, 8×120, 10×80, 10×100, 10×120, 10×140, 10×160",
      loadCapacity: "25-40kg per anchor in concrete",
      applications: "uPVC frames, curtain walls, MEP equipment, HVAC mounting",
      features: "Expansion sleeve design, pre-assembled screw, corrosion-free",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 to-white px-6 py-10">
        <div className="badge">Technical Data Sheets</div>
        <h1 className="mt-3 text-4xl font-semibold">Product Specifications & Engineering Data</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          Comprehensive technical specifications for SAK Fasteners&apos; metal screws and plastic fixing systems. 
          Material grades, heat treatment processes, plating standards, and application guidelines for engineers and specifiers.
        </p>
      </header>

      {/* Screw Products */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold">Metal Screw Products</h2>
        <div className="space-y-6">
          {screwProducts.map((product, i) => (
            <div key={i} className="card-surface rounded-2xl border-2 border-[var(--accent)]/20 p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-[var(--accent-strong)]">{product.name}</h3>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-bold text-white">
                  In Stock
                </span>
              </div>
              
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Base Material</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.material}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Threading Process</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.threading}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Heat Treatment</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.heatTreatment}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Hardness (Rockwell C)</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.hardness}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Surface Finish</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.plating}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Available Sizes</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.sizes}</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-[var(--accent)]/5 p-4">
                <div className="text-xs font-semibold uppercase text-[var(--paper)]">Typical Applications:</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{product.applications}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plastic Products */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold">Plastic Fixing Systems</h2>
        <div className="space-y-6">
          {plasticProducts.map((product, i) => (
            <div key={i} className="card-surface rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-blue-800">{product.name}</h3>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  Tier-2 Grade
                </span>
              </div>
              
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Material</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.material}</div>
                </div>
                {product.color && (
                  <div>
                    <div className="text-xs font-semibold uppercase text-[var(--muted)]">Color</div>
                    <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.color}</div>
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Sizes Available</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.sizes}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Load Capacity</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.loadCapacity}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs font-semibold uppercase text-[var(--muted)]">Design Features</div>
                  <div className="mt-1 font-mono text-sm text-[var(--paper)]">{product.features}</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-blue-100 p-4">
                <div className="text-xs font-semibold uppercase text-blue-900">Typical Applications:</div>
                <div className="mt-1 text-sm text-blue-700">{product.applications}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Process */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Manufacturing Process Flow</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="inline-flex items-center gap-3">
            <div className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-white">
              <div className="text-xs">Step 1</div>
              <div className="mt-1 font-semibold">Cold Heading</div>
            </div>
            <div className="text-2xl text-[var(--muted)]">→</div>
            <div className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-white">
              <div className="text-xs">Step 2</div>
              <div className="mt-1 font-semibold">Thread Rolling</div>
            </div>
            <div className="text-2xl text-[var(--muted)]">→</div>
            <div className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-white">
              <div className="text-xs">Step 3</div>
              <div className="mt-1 font-semibold">Heat Treatment</div>
            </div>
            <div className="text-2xl text-[var(--muted)]">→</div>
            <div className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-white">
              <div className="text-xs">Step 4</div>
              <div className="mt-1 font-semibold">Electro-Plating</div>
            </div>
            <div className="text-2xl text-[var(--muted)]">→</div>
            <div className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-white">
              <div className="text-xs">Step 5</div>
              <div className="mt-1 font-semibold">QC & Packaging</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-5">
            <h3 className="font-semibold text-green-800">✓ Rolled Threads</h3>
            <p className="mt-2 text-sm text-green-700">
              Higher strength vs. cut threads due to grain flow retention. Applied to all screw SKUs.
            </p>
          </div>
          <div className="rounded-xl bg-orange-50 p-5">
            <h3 className="font-semibold text-orange-800">🔥 Case Hardening</h3>
            <p className="mt-2 text-sm text-orange-700">
              ~0.30mm case depth. Hard shell + ductile core prevents head shearing, improves thread bite.
            </p>
          </div>
          <div className="rounded-xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-800">🛡️ Zinc Plating</h3>
            <p className="mt-2 text-sm text-blue-700">
              Min 8μm thickness. 100+ hours salt spray tested. Suitable for indoor construction environments.
            </p>
          </div>
        </div>
      </section>

      {/* Application Suitability */}
      <section className="rounded-3xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white px-6 py-8">
        <h2 className="text-2xl font-semibold text-green-900">✓ Suitable Applications</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Drywall & gypsum board systems",
            "Light steel keel framing",
            "MDF, chipboard, plywood assembly",
            "Interior fit-out & renovation",
            "MEP/HVAC equipment mounting",
            "Electrical conduit fixing",
            "Furniture & carpentry",
            "uPVC window/door installation",
            "False ceiling grid assembly",
          ].map((app, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-green-800">
              <span className="text-green-600">✓</span>
              <span>{app}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white px-6 py-8">
        <h2 className="text-2xl font-semibold text-red-900">❌ Not Suitable For</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Seismic anchoring / ETA-certified structural applications",
            "Exterior structural steel in high-corrosion zones",
            "Marine, chemical, or high-temperature environments",
            "Dynamic seismic loading or vibration-critical connections",
            "Through-bolting for heavy machinery (>500kg loads)",
            "Permanent outdoor exposure without protective coatings",
          ].map((app, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-red-700">
              <span className="text-red-600">❌</span>
              <span>{app}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-red-800">
          <strong>Note:</strong> SAK Fasteners specializes in <strong>Tier-2 volume construction fasteners</strong>. 
          We are not Hilti, Würth, Fischer, or ETA/CE seismic anchor OEMs. Our products are cost-effective solutions for high-volume commercial construction markets.
        </p>
      </section>
    </div>
  );
}
