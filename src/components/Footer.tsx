import Link from "next/link";

const quickLinks = [
   { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const geoLinks = [
  { city: "Ahmedabad, India", href: "/contact#ahmedabad" },
  { city: "Dubai, UAE", href: "/contact#dubai" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-white/60 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-[var(--paper)]">SAK Fasteners</div>
          <p className="text-sm text-[var(--muted)]">
            Leading manufacturers of metal & plastic fasteners since 2014. We distribute our products all across India and Middle East region including Nylon Frame Fixing Anchors, Plastic Wall Plugs, Self Tapping Screws, Self Drilling Screws, Drywall Screws & Rack Bolts.
          </p>
          <p className="text-sm text-[var(--muted)]">Established: 2014 | Manufacturing Excellence</p>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold text-[var(--paper)] uppercase tracking-wide">Quick links</div>
          <div className="flex flex-col gap-2 text-sm">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold text-[var(--paper)] uppercase tracking-wide">Locations</div>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {geoLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--accent)]">
                {item.city}
              </Link>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)]">Phone: +91 7737835253</p>
          <p className="text-sm text-[var(--muted)]">Email: sales@sakfasteners.com</p>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold text-[var(--paper)] uppercase tracking-wide">Quality</div>
          <ul className="text-sm text-[var(--muted)] space-y-2">
            <li>100% Virgin Material</li>
            <li>Rust-proof Plating</li>
            <li>Quality Assured Products</li>
          </ul>
           <div className="mt-4 space-y-2">
             <div className="text-xs font-semibold text-[var(--paper)] uppercase tracking-wide">Find Us On</div>
             <div className="flex flex-col gap-1 text-xs text-[var(--muted)]">
               <a href="https://www.indiamart.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition">
                 <span className="text-green-600">✓</span> IndiaMART
               </a>
               <a href="https://www.justdial.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition">
                 <span className="text-yellow-600">★</span> JustDial Verified
               </a>
             </div>
           </div>
          <div className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} SAK Fasteners. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
