import Link from "next/link";
// import Image from "next/image";

const productCategories = [
  {
    title: "Nylon Frame Anchors",
    specs: "8mm & 10mm sizes, 100% virgin plastic material",
    highlight: "Rust-proof fixing solutions for masonry and concrete applications.",
    img: "/products/nylon-anchors.jpg",
  },
  {
    title: "Plastic Wall Plugs",
    specs: "HDPE construction, 25-50mm range with expansion design",
    highlight: "Reliable wall mounting for lightweight to medium-duty installations.",
    img: "/products/wall-plugs.jpg",
  },
  {
    title: "Self Drilling Screws",
    specs: "Direct drilling capacity up to 5mm steel thickness",
    highlight: "Time-saving installation without pre-drilling for metal applications.",
    img: "/products/self-drilling.jpg",
  },
  {
    title: "Self Tapping Screws",
    specs: "Available in MS & Stainless Steel 202, 304, 316 grades",
    highlight: "Thread-forming screws with multiple finish options for all environments.",
    img: "/products/self-tapping.jpg",
  },
  {
    title: "Drywall Screws",
    specs: "Black zinc finish, optimized for gypsum board installation",
    highlight: "Sharp point and coarse threads for fast drywall assembly work.",
    img: "/products/drywall-screws.jpg",
  },
  {
    title: "Rack Bolts",
    specs: "10mm diameter with 14x75mm plugs, complete sets",
    highlight: "Heavy-duty mounting solutions for racks, shelving, and equipment.",
    img: "/products/rack-bolts.jpg",
  },
];

const industries = [
  {
    name: "Construction & Infrastructure",
    need: "Reliable anchoring and structural fastening solutions",
    solution: "Frame anchors, wall plugs, and heavy-duty rack bolts for concrete and masonry work.",
    img: "/industries/construction.jpg",
  },
  {
    name: "Electrical & Sanitary",
    need: "Corrosion-resistant mounting for wet environments",
    solution: "Stainless steel screws with rust-proof finishes for long-lasting electrical and plumbing installations.",
    img: "/industries/electrical.jpg",
  },
  {
    name: "Furniture & Interior",
    need: "Clean installation with concealed fastening",
    solution: "Drywall screws and plastic plugs for professional furniture assembly and interior finishing.",
    img: "/industries/furniture.jpg",
  },
  {
    name: "uPVC & Window Systems",
    need: "Non-corrosive fasteners for aluminum and uPVC frames",
    solution: "Self-drilling and self-tapping screws designed for window and door frame installations.",
    img: "/industries/upvc.jpg",
  },
];

const resources = [
  {
    title: "Product Installation Guides",
    cta: "Download PDF",
    note: "Step-by-step installation for all product types",
  },
  {
    title: "Material & Finish Selection Guide",
    cta: "View guide",
    note: "Choose the right material for your application",
  },
  {
    title: "Technical Specifications Sheet",
    cta: "Read article",
    note: "Detailed specs and load capacity charts",
  },
];

const faqs = [
  {
    q: "What is your average delivery time?",
    a: "Most products are in stock and can be delivered within 2-5 business days across India and Middle East. For bulk orders, please contact us for specific timelines.",
  },
  {
    q: "Do you provide quality certifications?",
    a: "Yes. We use 100% virgin material for plastic fasteners and provide quality certifications. Our products meet industry standards and are tested for durability.",
  },
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ varies by product type. Contact us with your requirements, and we'll provide competitive pricing for your order quantity.",
  },
  {
    q: "Which regions do you serve?",
    a: "We serve all of India and the Middle East region with our comprehensive range of metal and plastic fasteners.",
  },
];

const geoLocations = [
  {
    id: "pune",
    city: "Pune, India",
    note: "Head office and manufacturing facility",
  },
  {
    id: "middleeast",
    city: "Middle East",
    note: "Regional distribution and support",
  },
];

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SAK Fasteners LLP',
    url: 'https://www.sakfasteners.com',
    logo: 'https://www.sakfasteners.com/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-91068-86259',
        contactType: 'sales',
        areaServed: ['IN', 'AE', 'SA', 'OM'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shed No 32, Next to Mohan Marble, Pisoli',
      addressLocality: 'Pune',
      postalCode: '411048',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.sakfasteners.com',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.sakfasteners.com/#business',
    name: 'SAK Fasteners LLP',
    image: 'https://www.sakfasteners.com/logo.png',
    description: 'Leading manufacturer of metal and plastic fasteners including Nylon Frame Anchors, Plastic Wall Plugs, Self Tapping Screws, Self Drilling Screws, Drywall Screws and Rack Bolts serving India and Middle East since 2014.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shed No 32, Next to Mohan Marble, Pisoli',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411048',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.4574',
      longitude: '73.9530',
    },
    url: 'https://www.sakfasteners.com',
    telephone: '+91-91068-86259',
    email: 'info@sakfasteners.com',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
      {
        '@type': 'Country',
        name: 'Oman',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sakfasteners.com',
      },
    ],
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: productCategories.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        description: product.highlight,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'SAK Fasteners LLP',
          },
        },
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sakfasteners.com/#website',
    url: 'https://www.sakfasteners.com',
    name: 'SAK Fasteners LLP',
    description: 'Leading manufacturer of metal and plastic fasteners serving India and Middle East since 2014',
    publisher: {
      '@id': 'https://www.sakfasteners.com/#organization',
    },
    inLanguage: 'en-US',
  };

  return (
    <div className="space-y-20">
      <section className="section-shell overflow-hidden rounded-3xl border border-[var(--border)] bg-white px-8 py-12 shadow-lg">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="badge">Manufacturing Since 2014</div>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--paper)] md:text-5xl">
              Welcome to SAK Fasteners LLP
            </h1>
            <p className="max-w-2xl text-lg text-[var(--muted)]">
              SAK Fasteners LLP are leading manufacturers of metal & plastic fasteners since 2014. We distribute our products all across India and Middle East region. We manufacture Nylon Frame Fixing Anchor Fasteners, Plastic Wall Plugs, Self Tapping Screws in MS & SS 202 & SS 304, Self Drilling Screws, Wood Screws, Drywall Screws & Rack Bolts.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="rounded-full bg-[var(--accent)]/10 px-4 py-2 text-[var(--accent-strong)] border border-[var(--accent)]/20">Since 2014</span>
              <span className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-white">Quality Assured</span>
              <span className="rounded-full border border-[var(--border)] px-4 py-2 text-[var(--paper)]">100% Virgin Material</span>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact#rfq"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-strong)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition hover:bg-[var(--accent)]"
              >
                Contact Us
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-base font-semibold text-[var(--paper)] transition hover:border-[var(--accent)]"
              >
                View Products
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
              {[
                { label: "Established", value: "2014" },
                { label: "Product Range", value: "6+" },
                { label: "Markets", value: "India + ME" },
                { label: "Quality", value: "100%" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-lg font-semibold text-[var(--accent-strong)]">{item.value}</div>
                  <div className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-[var(--paper)]">Product Inquiry</span>
              <span className="text-xs text-[var(--muted)]">Get in touch</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">Product Type</label>
                <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]">
                  <option>Nylon Frame Anchors</option>
                  <option>Plastic Wall Plugs</option>
                  <option>Self Drilling Screws</option>
                  <option>Self Tapping Screws</option>
                  <option>Drywall Screws</option>
                  <option>Rack Bolts</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">Material</label>
                <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]">
                  <option>MS (Mild Steel)</option>
                  <option>Stainless Steel 304</option>
                  <option>Stainless Steel 316</option>
                  <option>Plastic (HDPE)</option>
                  <option>Nylon</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">Finish</label>
                <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]">
                  <option>Silver Zinc Plating</option>
                  <option>Black Zinc</option>
                  <option>Chrome Shine</option>
                  <option>Plain/Natural</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">Quantity</label>
                <input
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                  placeholder="500"
                  type="number"
                />
              </div>
              <Link
                href="/contact#rfq"
                className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-strong)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition hover:bg-[var(--accent)]"
              >
                Submit Inquiry <span aria-hidden>→</span>
              </Link>
              <p className="text-xs text-[var(--muted)]">
                Tell us your requirements and quantity. We&apos;ll get back to you with pricing and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10 rounded-3xl border border-[var(--border)] bg-white/80 backdrop-blur-sm px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="badge">Catalog</div>
            <h2 className="text-3xl font-semibold">Products engineered for reliability</h2>
            <p className="max-w-2xl text-[var(--muted)]">
              Each category ships with dimensional checks, torque references, and coating compatibility notes so crews can install fast and safely.
            </p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-[var(--paper)] underline underline-offset-8">
            View all products
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {productCategories.map((item) => (
            <div key={item.title} className="card-surface rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[var(--accent)]/5 to-transparent flex items-center justify-center">
                {/* <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                /> */}
                <span className="text-sm text-[var(--muted)]">Product Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--paper)]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.specs}</p>
                  </div>
                  <span className="rounded-full bg-[var(--accent)]/30 px-3 py-1 text-xs font-semibold text-[var(--paper)]">
                    In Stock
                  </span>
                </div>
                <p className="mt-4 text-sm text-[var(--paper)]">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="badge">Industries</div>
            <h2 className="text-3xl font-semibold">Serving Diverse Industries</h2>
            <p className="max-w-2xl text-[var(--muted)]">
              Our fastener solutions are trusted across multiple sectors for quality, durability, and reliability.
            </p>
          </div>
          <Link href="/industries" className="text-sm font-semibold text-[var(--paper)] underline underline-offset-8">
            Industries served
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((item) => (
            <div key={item.name} className="card-surface rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[var(--accent)]/5 to-transparent flex items-center justify-center">
                {/* <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                /> */}
                <span className="text-sm text-[var(--muted)]">Industry Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[var(--paper)]">{item.name}</h3>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--paper)]">Solutions</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">Need: {item.need}</p>
                <p className="mt-3 text-sm text-[var(--paper)]">Solution: {item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-white p-8">
          <div className="badge">Quality & Manufacturing</div>
          <h2 className="mt-3 text-3xl font-semibold">Quality Assured Products</h2>
          <ul className="mt-6 space-y-3 text-sm text-[var(--paper)]">
            <li>✓ 100% virgin material for all plastic fasteners</li>
            <li>✓ Rust-proof plating and finishing options</li>
            <li>✓ Quality certifications and testing available</li>
            <li>✓ Consistent dimensional accuracy and standards</li>
            <li>✓ Fast delivery across India and Middle East</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            <span className="rounded-full bg-[var(--accent)]/30 px-3 py-1 text-[var(--paper)]">Since 2014</span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--paper)]">Virgin Material</span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--paper)]">Quality Tested</span>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-white/90 backdrop-blur-sm p-8">
          <div className="flex items-center justify-between">
            <div className="badge">Resources</div>
            <Link href="/resources" className="text-sm font-semibold text-[var(--paper)] underline underline-offset-8">
              All resources
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {resources.map((item) => (
              <div key={item.title} className="card-surface rounded-2xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[var(--paper)]">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)] mt-1">{item.note}</p>
                  </div>
                  <Link
                    href="/resources"
                    className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap hover:bg-[var(--accent)] transition"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/5 to-transparent p-5">
            <p className="text-sm font-semibold text-[var(--paper)]">Technical Support</p>
            <p className="text-xs text-[var(--muted)] mt-1">
              Our team provides guidance on product selection, installation best practices, and application-specific solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell rounded-3xl border border-[var(--border)] bg-white/80 backdrop-blur-sm px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="badge">Service Coverage</div>
            <h2 className="text-3xl font-semibold">Serving India & Middle East</h2>
            <p className="max-w-2xl text-[var(--muted)]">
              With our manufacturing base in Pune and regional distribution, we ensure timely delivery across all markets.
            </p>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-[var(--paper)] underline underline-offset-8">
            Contact and locations
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {geoLocations.map((loc) => (
            <div key={loc.id} className="card-surface rounded-2xl p-5">
              <div className="text-lg font-semibold text-[var(--paper)]">{loc.city}</div>
              <p className="text-sm text-[var(--muted)]">{loc.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--bg)] px-6 py-10">
        <div className="badge">FAQs</div>
        <h2 className="mt-3 text-3xl font-semibold">Fast answers for procurement and site leads</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="card-surface rounded-2xl p-4">
              <div className="text-base font-semibold text-[var(--paper)]">{item.q}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell rounded-3xl border border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-3">
            <div className="badge bg-white/20 text-white border-white/30">Ready to build</div>
            <h2 className="text-3xl font-semibold text-white">Send your BOM or spec list</h2>
            <p className="text-sm text-white/90">
              Attach drawings, coatings, and delivery windows. We respond in under 2 hours with pricing, lead times, and risk notes.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white">
              <span className="rounded-full bg-white/20 px-4 py-2">sales@sakfasteners.com</span>
              <span className="rounded-full bg-white/20 px-4 py-2">+1 (713) 570-0000</span>
              <span className="rounded-full bg-white/20 px-4 py-2">WhatsApp ready</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/40 p-6" id="rfq">
            <form className="space-y-3">
              <input
                className="w-full rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                placeholder="Name"
              />
              <input
                className="w-full rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                placeholder="Email"
                type="email"
              />
              <input
                className="w-full rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                placeholder="Phone / WhatsApp"
              />
              <textarea
                className="w-full rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-sm text-[var(--paper)] outline-none focus:border-[var(--accent)]"
                placeholder="Specs: size, grade, coating, quantity, delivery window"
                rows={4}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--paper)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink)]"
              >
                Submit RFQ
              </button>
              <p className="text-xs text-white/80">
                We reply in under 2 hours on business days. Attach drawings when you email us.
              </p>
            </form>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </div>
  );
}
