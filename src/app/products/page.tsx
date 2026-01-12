import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | SAK Fasteners - Metal & Plastic Fasteners Catalog",
  description: "Browse our complete range: Nylon Frame Fixing Anchors (8mm-10mm), Plastic Wall Plugs, Self Tapping Screws (MS, SS304, SS316), Self Drilling Screws, Drywall Screws & Rack Bolts. Quality materials, competitive pricing.",
  keywords: ["nylon frame anchors", "plastic wall plugs", "self tapping screws", "self drilling screws", "drywall screws", "rack bolts", "fasteners catalog"],
  alternates: {
    canonical: "https://www.sakfasteners.com/products",
  },
  openGraph: {
    title: "SAK Fasteners Product Catalog | Metal & Plastic Fasteners",
    description: "Complete range of industrial fasteners - Nylon anchors, wall plugs, self-tapping & drilling screws for construction, uPVC, and electrical applications.",
    url: "https://www.sakfasteners.com/products",
  },
};

const productLines = [
  {
    name: "Nylon Frame Fixing Anchor Fasteners",
    specs: "8mm & 10mm sizes, HHB MS Screw with Silver Zinc Plating 12 microns, 9TPI Screw, PZ3/PH3 Head",
    notes: "100% virgin plastic in light grey color. Also known as Nylon Anchor Fasteners or NFF.",
     applications: [
       "uPVC window and door frame installation to masonry walls",
       "Aluminum curtain wall fixing in commercial buildings",
       "Electrical conduit mounting on concrete surfaces",
       "Sanitary fixture bracket installation in bathrooms",
       "False ceiling frame anchoring",
       "Kitchen cabinet wall mounting on brick/concrete",
     ],
     techDetails: "Rust-proof design ensures longevity in wet environments. Expansion mechanism provides secure grip in hollow and solid walls. Load capacity: 25-40kg per anchor in concrete.",
  },
  {
    name: "Plastic Wall Plugs",
    specs: "25mm to 50mm plugs, 100% virgin HDPE material with chrome shine finish",
    notes: "Wide assortment of materials and sizes. From ₹6 per packet. Premium quality guaranteed.",
     applications: [
       "Interior drywall fixture mounting (photo frames, shelves)",
       "Lightweight electrical switch and socket box fixing",
       "Curtain rod bracket installation",
       "Bathroom accessory mounting (towel rails, soap holders)",
       "Furniture assembly and wall mounting",
       "Signage and display board installation",
     ],
     techDetails: "Four-way expansion provides maximum grip. Color-coded sizing for easy identification. Suitable for hollow blocks, gypsum boards, and solid masonry. Load capacity varies from 5-20kg based on wall type.",
  },
  {
    name: "Self Drilling Screws",
    specs: "5mm drilling capacity, rust-proof plating, direct drilling into metal sheets",
    notes: "Highest quality ensured for construction and metal fabrication. From ₹1 per piece.",
     applications: [
       "Steel structure assembly in warehouse construction",
       "Metal roofing and cladding installation",
       "HVAC ductwork joining and mounting",
       "Industrial rack and shelving assembly",
       "Automotive body panel fastening",
       "Electrical panel box assembly",
     ],
     techDetails: "Hardened drill point eliminates pre-drilling requirement. Saves 40% installation time vs. conventional screws. Thread design ensures secure grip in thin gauge steel (0.5-5mm). Bi-metal construction with heat-treated tip.",
  },
  {
    name: "Self Tapping Screws",
    specs: "Available in SS304, SS316 & MS. Sizes: 6mm, 8mm",
    notes: "Premium quality tapping screws for various applications. From ₹1.20 per piece.",
     applications: [
       "Wooden furniture assembly and joinery",
       "Plastic component fastening in appliances",
       "Sheet metal joining in fabrication",
       "uPVC profile assembly (windows, doors, partitions)",
       "Fiberglass and composite material fastening",
       "Marine equipment installation (SS316 grade)",
     ],
     techDetails: "Thread-forming design creates mating threads in pre-drilled holes. SS316 marine grade offers superior corrosion resistance for coastal applications. Torque specifications: 2.5-4.0 Nm for optimal clamping.",
  },
  {
    name: "Drywall Screws (Black Bugle Head)",
    specs: "Rust-proof black zinc plating, sharp tip for easy drilling, hardened for strength",
    notes: "Applications: construction, sanitary, electrical, uPVC frame fixing. From ₹0.10 per piece.",
     applications: [
       "Gypsum board to metal stud installation",
       "False ceiling grid assembly",
       "Partition wall construction",
       "Interior fit-out and renovation projects",
       "Cement board fixing in wet areas",
       "Drywall to wood framing",
     ],
     techDetails: "Bugle head design countersinks flush without tearing paper facing. Black phosphate coating prevents rust in humid conditions. Sharp point penetrates 20-gauge steel studs without pilot holes. Coarse thread pitch for optimal holding in wood and gypsum.",
  },
  {
    name: "Rack Bolts (Wash Basin Fixing Set)",
    specs: "10mm rack bolt with 14x75mm plastic plug",
    notes: "Variety of packing: blister pack, plastic pouch, cardboard. From ₹11 per piece.",
     applications: [
       "Wall-hung wash basin and sink installation",
       "Heavy-duty shelf bracket mounting",
       "Mirror and vanity cabinet fixing",
       "Kitchen equipment wall mounting",
       "Commercial washroom fixture installation",
       "Industrial equipment anchoring to masonry",
     ],
     techDetails: "High-tensile bolt withstands 150kg+ vertical load. Nylon plug expands in four directions for secure anchorage. Complete kit includes bolt, plug, washer, and nut. Corrosion-resistant zinc plating suitable for damp environments.",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      <header className="section-shell rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <div className="badge">Products</div>
        <h1 className="mt-3 text-3xl font-semibold">Metal & Plastic Fasteners - Variety That&apos;s Affordable</h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">
          SAK Fasteners manufactures high-quality metal and plastic fasteners with 100% virgin materials, rust-proof plating, and quality assurance. Our product range serves construction, sanitary, electrical, and industrial applications across India and Middle East.
        </p>
      </header>

      <section className="grid gap-6">
        {productLines.map((line) => (
          <div key={line.name} className="card-surface rounded-2xl p-8">
            <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
              <div>
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold text-[var(--paper)]">{line.name}</h2>
                  <span className="rounded-full bg-[var(--accent)]/30 px-3 py-1 text-xs font-semibold text-[var(--paper)]">In Stock</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--muted)]">SPECIFICATIONS</p>
                <p className="mt-1 text-sm text-[var(--paper)]">{line.specs}</p>
                <p className="mt-4 text-sm text-[var(--muted)]">{line.notes}</p>
                <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--accent)]/5 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Technical Details</p>
                  <p className="mt-1 text-sm text-[var(--paper)]">{line.techDetails}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--muted)]">COMMON APPLICATIONS</p>
                <ul className="mt-3 space-y-2">
                  {line.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--paper)]">
                      <span className="mt-1 text-[var(--accent-strong)]">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-8">
        <h2 className="text-2xl font-semibold">Manufacturing Excellence</h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--paper)]">
          <li>100% virgin HDPE material for plastic products with chrome shine finish.</li>
          <li>Rust-proof plating with 12 microns silver zinc coating on metal fasteners.</li>
          <li>Sharp tips and hardened materials for easy drilling and long-lasting strength.</li>
          <li>Wide distribution network across India and Middle East region.</li>
          <li>Variety of packing options: blister packs, plastic pouches, and cardboard packaging.</li>
          <li>Manufacturer since 2014 with commitment to quality and affordability.</li>
        </ul>
      </section>
    </div>
  );
}
