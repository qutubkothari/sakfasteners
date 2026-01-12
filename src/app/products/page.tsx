import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | SAK Fasteners - Screws & Plastic Fixings",
  description: "Wood Screws, Chipboard Screws, Drywall Screws, Self-Tapping Screws | Fischer-Pattern Wall Plugs, Frame Anchors. Vertically integrated manufacturing from SAE 1008/1018 steel.",
  keywords: ["wood screws", "chipboard screws", "drywall screws", "self-tapping screws", "wall plugs", "frame anchors", "fasteners manufacturer"],
  alternates: {
    canonical: "https://www.sakfasteners.com/products",
  },
  openGraph: {
    title: "SAK Fasteners Product Families | Screws & Plastic Fixings",
    description: "Complete range: Metal screws (Wood, Chipboard, Drywall, Self-Tapping) and Plastic fixings (Wall Plugs, Frame Anchors).",
    url: "https://www.sakfasteners.com/products",
  },
};

const screwProducts = [
  {
    name: "Wood Screws",
    material: "SAE 1008 Low-Carbon Steel",
    finish: "Yellow Zinc / Silver Zinc",
    sizes: "#6, #8, #10, #12 (3/4\" to 3\" lengths)",
    applications: "Wooden furniture, carpentry, MDF assembly, cabinet installation",
    features: ["Coarse thread pitch", "Sharp gimlet point", "Phillips/Pozidriv head", "8μm zinc plating"],
  },
  {
    name: "Chipboard Screws",
    material: "SAE 1018 Medium-Carbon Steel",
    finish: "Yellow Zinc (8μm min)",
    sizes: "3.5mm, 4.0mm, 4.5mm, 5.0mm (16-70mm lengths)",
    applications: "Particle board, chipboard, melamine panels, furniture assembly",
    features: ["Thread-forming design", "Case hardened HRC 52", "Countersunk head", "100+ hrs salt spray"],
  },
  {
    name: "Drywall Screws",
    material: "SAE 1018 Medium-Carbon Steel",
    finish: "Black Phosphate / Black Zinc",
    sizes: "#6 x 1\", #6 x 1.25\", #6 x 1.625\", #8 x 1.25\"",
    applications: "Gypsum board, plasterboard, ceiling systems, partition walls",
    features: ["Bugle head design", "Sharp point (no pilot)", "Coarse thread", "Flush countersinking"],
  },
  {
    name: "Self-Tapping Screws",
    material: "MS / SS 202 / SS 304 / SS 316",
    finish: "Zinc (MS) | Passivated (SS)",
    sizes: "ST2.9, ST3.5, ST4.2, ST4.8 (10-50mm)",
    applications: "Sheet metal, HVAC ducts, electrical panels, plastic enclosures",
    features: ["Thread-forming", "Pan/CSK head options", "Marine grade SS316", "MS case hardened"],
  },
];

const plasticProducts = [
  {
    name: "Standard Wall Plugs (Fischer Pattern)",
    material: "PPCP / HDPE (100% Virgin)",
    sizes: "S6×30, S8×40, S10×50, S12×60, S14×70",
    loadCapacity: "5-20kg (depending on wall type)",
    applications: "Interior fit-out, electrical/plumbing, furniture mounting, light fixtures",
    features: ["4-way expansion", "Anti-rotation ribs", "Color-coded sizing", "Collar flange design"],
  },
  {
    name: "Nylon Frame Anchors",
    material: "HDPE / Nylon 6 (General-Purpose Grade)",
    sizes: "6×40, 6×60, 8×60, 8×80, 8×100, 8×120, 10×80, 10×100, 10×120, 10×140, 10×160",
    loadCapacity: "25-40kg per anchor (in concrete)",
    applications: "uPVC frames, curtain walls, MEP equipment, HVAC mounting, electrical conduit",
    features: ["Expansion sleeve design", "Pre-assembled screw", "Corrosion-free", "12 TPI thread"],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-10">
        <div className="badge">Product Families</div>
        <h1 className="mt-3 text-4xl font-semibold">Screws & Plastic Fixing Systems</h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
          Two main product families manufactured in-house from raw steel and virgin plastic. SAE 1008/1018 case-hardened screws and Fischer-pattern wall plugs for Tier-2 construction markets.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products/technical"
            className="rounded-full border-2 border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/5"
          >
            Technical Data Sheets →
          </Link>
          <Link
            href="/oem-export"
            className="rounded-full bg-[var(--accent-strong)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
          >
            OEM & Export Info →
          </Link>
        </div>
      </header>

      {/* Family 1: Screws */}
      <section>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[var(--paper)]">1) Screws</h2>
            <p className="mt-2 text-[var(--muted)]">Case-hardened metal fasteners from SAE 1008/1018 steel</p>
          </div>
          <div className="rounded-full bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]">
            Rolled Threads | HRC 50-52
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {screwProducts.map((product, i) => (
            <div key={i} className="card-surface rounded-2xl border-2 border-[var(--accent)]/20 p-6 transition hover:border-[var(--accent)]/40">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-[var(--accent-strong)]">{product.name}</h3>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-white">
                  In Stock
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="font-semibold text-[var(--muted)]">Material:</span>
                  <span className="font-mono text-[var(--paper)]">{product.material}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="font-semibold text-[var(--muted)]">Finish:</span>
                  <span className="font-mono text-[var(--paper)]">{product.finish}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="font-semibold text-[var(--muted)]">Sizes:</span>
                  <span className="font-mono text-[var(--paper)]">{product.sizes}</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-[var(--accent)]/5 p-3">
                <div className="text-xs font-semibold uppercase text-[var(--paper)]">Applications:</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{product.applications}</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="rounded-full bg-white px-3 py-1 text-xs text-[var(--paper)] shadow-sm">
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Family 2: Plastic Fixings */}
      <section>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[var(--paper)]">2) Plastic Fixings</h2>
            <p className="mt-2 text-[var(--muted)]">100% virgin PPCP/HDPE wall plugs and frame anchors</p>
          </div>
          <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            Fischer Pattern | Tier-2 Grade
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plasticProducts.map((product, i) => (
            <div key={i} className="card-surface rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white p-6 transition hover:border-blue-300">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-blue-800">{product.name}</h3>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  Virgin Grade
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between border-b border-blue-200 pb-2">
                  <span className="font-semibold text-[var(--muted)]">Material:</span>
                  <span className="font-mono text-[var(--paper)]">{product.material}</span>
                </div>
                <div className="flex justify-between border-b border-blue-200 pb-2">
                  <span className="font-semibold text-[var(--muted)]">Sizes:</span>
                  <span className="font-mono text-[var(--paper)]">{product.sizes}</span>
                </div>
                <div className="flex justify-between border-b border-blue-200 pb-2">
                  <span className="font-semibold text-[var(--muted)]">Load Capacity:</span>
                  <span className="font-mono text-[var(--paper)]">{product.loadCapacity}</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-blue-100 p-3">
                <div className="text-xs font-semibold uppercase text-blue-900">Applications:</div>
                <div className="mt-1 text-sm text-blue-700">{product.applications}</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="rounded-full bg-white px-3 py-1 text-xs text-blue-800 shadow-sm">
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl border-2 border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Ready to Order?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
          Request quotation for bulk orders, mixed containers, or OEM private label packaging. Competitive pricing for GCC and African markets.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#rfq"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[var(--accent-strong)] transition hover:bg-white/90"
          >
            Request Quotation →
          </Link>
          <Link
            href="/oem-export"
            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            OEM & Export Info →
          </Link>
        </div>
      </section>
    </div>
  );
}
