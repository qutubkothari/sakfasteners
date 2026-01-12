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

      {/* Company Story */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-[var(--paper)]">Our Story</h2>
          <div className="mt-4 space-y-3 text-[var(--muted)]">
            <p>
              Founded in 2014, SAK Fasteners LLP began with a vision to provide the Indian market with world-class fastening solutions that combine quality, reliability, and affordability. What started as a focused operation has grown into a comprehensive manufacturing facility equipped with modern machinery and automated production lines.
            </p>
            <p>
              Today, we manufacture over 6 distinct product lines, each engineered to meet specific industry requirements. Our commitment to using 100% virgin raw materials and maintaining stringent quality controls has earned us the trust of builders, contractors, and industrial clients across multiple regions.
            </p>
          </div>
        </div>

        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-[var(--paper)]">Our Manufacturing Facility</h2>
          <div className="mt-4 space-y-3 text-[var(--muted)]">
            <p>
              Located in the industrial hub of Pisoli, Pune, our manufacturing facility spans a modern production floor equipped with:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Automated injection molding machines for plastic fasteners</li>
              <li>Thread rolling and forming equipment for metal screws</li>
              <li>Electroplating and surface treatment units</li>
              <li>Quality control laboratory with testing equipment</li>
              <li>Temperature-controlled raw material storage</li>
              <li>Packaging and dispatch center</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Factory Images Section */}
      <section className="rounded-3xl border border-[var(--border)] bg-white px-6 py-8">
        <h2 className="text-2xl font-semibold">Our Manufacturing Capability</h2>
        <p className="mt-2 text-[var(--muted)]">
          State-of-the-art machinery and quality-controlled production processes
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Production Floor", desc: "Modern manufacturing facility with automated machinery" },
            { title: "Quality Control Lab", desc: "In-house testing for dimensional accuracy and strength" },
            { title: "Raw Material Storage", desc: "Climate-controlled warehouse for virgin materials" },
            { title: "Injection Molding Unit", desc: "High-precision molding for plastic fasteners" },
            { title: "Threading & Rolling Machines", desc: "Advanced equipment for metal screw production" },
            { title: "Plating & Finishing", desc: "Rust-proof surface treatments and coatings" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/5 to-transparent p-6">
              <div className="mb-3 flex h-32 items-center justify-center rounded-xl bg-white/80">
                <span className="text-sm text-[var(--muted)]">{item.title} Photo</span>
              </div>
              <h3 className="font-semibold text-[var(--paper)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          * Add actual factory and machinery photos to /public/about/ directory
        </p>
      </section>

      {/* Quality & Certifications */}
      <section className="card-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Quality Assurance & Standards</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[var(--paper)]">Manufacturing Standards</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ 100% virgin plastic (HDPE, Nylon) for all plastic products</li>
              <li>✓ IS 1367 compliant for technical supply conditions</li>
              <li>✓ DIN 7504, DIN 7505 standards for self-drilling screws</li>
              <li>✓ ISO metric threading for precision fit</li>
              <li>✓ Hardness testing: HRC 28-38 for steel screws</li>
              <li>✓ Salt spray testing for plated products (96+ hours)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--paper)]">Quality Control Process</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Dimensional verification for every production batch</li>
              <li>✓ Tensile strength and shear load testing</li>
              <li>✓ Thread pitch gauge inspection</li>
              <li>✓ Visual inspection for surface defects</li>
              <li>✓ Random sampling from finished goods</li>
              <li>✓ Traceability records maintained per batch</li>
            </ul>
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
