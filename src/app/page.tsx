import Link from "next/link";
import Image from "next/image";

const productCategories = [
  {
    title: "Nylon Frame Anchors",
    specs: "8mm & 10mm sizes, 100% virgin plastic material",
    highlight: "Rust-proof fixing solutions for masonry and concrete applications.",
    img: "/products/nylon-anchors-small.jpg",
    hoverImg: "/products/nylon-anchors.jpg",
  },
  {
    title: "Plastic Wall Plugs",
    specs: "HDPE construction, 25-50mm range with expansion design",
    highlight: "Reliable wall mounting for lightweight to medium-duty installations.",
    img: "/products/wall-plugs-small.jpg",
    hoverImg: "/products/wall-plugs.jpg",
  },
  {
    title: "Self Drilling Screws",
    specs: "Direct drilling capacity up to 5mm steel thickness",
    highlight: "Time-saving installation without pre-drilling for metal applications.",
    img: "/products/self-drilling-small.jpg",
    hoverImg: "/products/self-drilling.jpg",
  },
  {
    title: "Self Tapping Screws",
    specs: "Available in MS & Stainless Steel 202, 304, 316 grades",
    highlight: "Thread-forming screws with multiple finish options for all environments.",
    img: "/products/self-tapping-small.jpg",
    hoverImg: "/products/self-tapping.jpg",
  },
  {
    title: "Drywall Screws",
    specs: "Black zinc finish, optimized for gypsum board installation",
    highlight: "Sharp point and coarse threads for fast drywall assembly work.",
    img: "/products/drywall-screws-small.jpg",
    hoverImg: "/products/drywall-screws.jpg",
  },
  {
    title: "Rack Bolts",
    specs: "10mm diameter with 14x75mm plugs, complete sets",
    highlight: "Heavy-duty mounting solutions for racks, shelving, and equipment.",
    img: "/products/rack-bolts-small.jpg",
    hoverImg: "/products/rack-bolts.jpg",
  },
];

const industries = [
  {
    name: "Construction & Infrastructure",
    need: "Reliable anchoring and structural fastening solutions",
    solution: "Frame anchors, wall plugs, and heavy-duty rack bolts for concrete and masonry work.",
    img: "/industries/construction-small.jpg",
    hoverImg: "/industries/construction.jpg",
  },
  {
    name: "Electrical & Sanitary",
    need: "Corrosion-resistant mounting for wet environments",
    solution: "Stainless steel screws with rust-proof finishes for long-lasting electrical and plumbing installations.",
    img: "/industries/electrical-small.jpg",
    hoverImg: "/industries/electrical.jpg",
  },
  {
    name: "Furniture & Interior",
    need: "Clean installation with concealed fastening",
    solution: "Drywall screws and plastic plugs for professional furniture assembly and interior finishing.",
    img: "/industries/furniture-small.jpg",
    hoverImg: "/industries/furniture.jpg",
  },
  {
    name: "uPVC & Window Systems",
    need: "Non-corrosive fasteners for aluminum and uPVC frames",
    solution: "Self-drilling and self-tapping screws designed for window and door frame installations.",
    img: "/industries/upvc-small.jpg",
    hoverImg: "/industries/upvc.jpg",
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
    id: "ahmedabad",
    city: "Ahmedabad, India",
    note: "Head office and manufacturing facility",
  },
  {
    id: "dubai",
    city: "Dubai, UAE",
    note: "Branch office and regional support",
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
        telephone: '+91 7737835253',
        contactType: 'sales',
        areaServed: ['IN', 'AE', 'SA', 'OM'],
        availableLanguage: ['English', 'Hindi', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971 507055253',
        contactType: 'sales',
        areaServed: ['AE', 'SA', 'OM'],
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60, Chirag Estate, CTM',
      addressLocality: 'Ahmedabad',
      postalCode: '380018',
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
      streetAddress: '60, Chirag Estate, CTM',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380018',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.0225',
      longitude: '72.5714',
    },
    url: 'https://www.sakfasteners.com',
    telephone: '+91 7737835253',
    email: 'sales@sakfasteners.com',
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
        // Add AEO-friendly synonyms and size variants for Nylon Frame Anchors
        ...(product.title === 'Nylon Frame Anchors'
          ? {
              alternateName: [
                'Nylon Anchor',
                'Nylon Frame Anchor',
                'NFF',
                'Nylon Frame Fixing',
                'Nylon Frame Fixing Anchor Fasteners',
                'Nylon Gitti',
                'uPVC Doors and Windows Fasteners',
              ],
              size: ['8x80', '8x100', '10x100'],
            }
          : {}),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.2',
          ratingCount: '156',
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          author: {
            '@type': 'Organization',
            name: 'Verified Buyer',
          },
          reviewBody:
            'High-quality fasteners with reliable performance. Excellent manufacturing and consistent quality across all products.',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '5',
          highPrice: '500',
          offerCount: '1',
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
      {/* Animated Banner Image */}
      <section className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
        <Image 
          src="/hero/products.gif" 
          alt="SAK Fasteners - Drywall Screws Manufacturing"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "700px" }}
          priority
          width={1920}
          height={700}
          key="hero-banner-gif"
          unoptimized
        />
      </section>

      {/* Hero Content Section */}
      <section className="section-shell rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white via-[var(--bg)] to-white px-8 py-16 shadow-lg">
        <div className="mx-auto max-w-4xl text-center">
          <div className="badge mx-auto">Manufacturing Since 2014</div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[var(--paper)] md:text-5xl lg:text-6xl">
            Vertically Integrated Fastener & Fixing Systems Manufacturer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)]">
            Screws · Wall Plugs · Frame Anchors · OEM Private Label
          </p>

          {/* Capability Icons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: "🔨", label: "Cold Heading" },
              { icon: "🔥", label: "Heat Treatment" },
              { icon: "⚡", label: "Electro-Plating" },
              { icon: "🧱", label: "Injection Molding" },
              { icon: "📦", label: "OEM Packaging" },
            ].map((capability) => (
              <div
                key={capability.label}
                className="flex items-center gap-2 rounded-full border-2 border-[var(--accent)]/30 bg-white px-4 py-2 text-sm font-semibold text-[var(--paper)] shadow-sm"
              >
                <span className="text-lg">{capability.icon}</span>
                <span>✓ {capability.label}</span>
              </div>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact#rfq"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-strong)] px-8 py-4 text-lg font-semibold !text-white shadow-lg shadow-[var(--accent)]/30 transition hover:bg-[var(--accent)] hover:!text-white"
            >
              Request Quotation
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/oem-export"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-strong)] bg-white px-8 py-4 text-lg font-semibold text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/5"
            >
              OEM Inquiry
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
            {[
              { label: "Production Capacity", value: "100 T/mo" },
              { label: "Export Markets", value: "ME + Africa" },
              { label: "Machinery Lines", value: "12 Heading" },
              { label: "OEM Capability", value: "Private Label" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="text-2xl font-bold text-[var(--accent-strong)]">{item.value}</div>
                <div className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">{item.label}</div>
              </div>
            ))}
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
            <div key={item.title} className="card-surface rounded-2xl overflow-visible group relative">
              <div className="relative h-64 bg-gradient-to-br from-[var(--accent)]/5 to-transparent flex items-center justify-center overflow-hidden cursor-pointer p-4">
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    width={400}
                    height={256}
                  />
                ) : (
                  <span className="text-sm text-[var(--muted)]">Product Image</span>
                )}
              </div>
              {/* Hover Popup - Positioned relative to card */}
              {item.img && (
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-2xl">
                  <Image
                    src={item.hoverImg || item.img}
                    alt={item.title}
                    className="w-[800px] h-[600px] object-contain border-4 border-white rounded-lg bg-white"
                    width={800}
                    height={600}
                  />
                </div>
              )}
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
            <div key={item.name} className="card-surface rounded-2xl overflow-visible group relative">
              <div className="relative aspect-video bg-gradient-to-br from-[var(--accent)]/5 to-transparent flex items-center justify-center overflow-hidden cursor-pointer">
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    width={600}
                    height={338}
                  />
                ) : (
                  <span className="text-sm text-[var(--muted)]">Industry Image</span>
                )}
              </div>
              {/* Hover Popup - Positioned relative to card */}
              {item.hoverImg && (
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-2xl">
                  <Image
                    src={item.hoverImg}
                    alt={item.name}
                    className="w-[800px] h-[600px] object-contain border-4 border-white rounded-lg bg-white"
                    width={800}
                    height={600}
                  />
                </div>
              )}
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
                    className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-xs font-semibold !text-white whitespace-nowrap hover:bg-[var(--accent)] hover:!text-white transition"
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
              With our manufacturing base in Ahmedabad and regional distribution through Dubai, we ensure timely delivery across all markets.
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
              <span className="rounded-full bg-white/20 px-4 py-2">+91 7737835253</span>
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
