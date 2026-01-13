"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/oem-export", label: "OEM & Export" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact/RFQ" },
];

const ctaHref = "/contact#rfq";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-[var(--border)] bg-white/80">
      <div className="hidden lg:block bg-[var(--accent-strong)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm font-medium">
          <span>Manufacturer Since 2014 | India & Middle East | Quality Fasteners</span>
          <div className="flex items-center gap-6">
            <a href="tel:+919106886259" className="hover:opacity-80 transition">+91 91068 86259</a>
            <a href="mailto:info@sakfasteners.com" className="hover:opacity-80 transition">info@sakfasteners.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="SAK Fasteners Logo" 
            className="h-12 w-12 object-contain"
            width={48}
            height={48}
          />
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-[var(--paper)]">SAK Fasteners</div>
            <div className="text-sm text-[var(--muted)]">Metal & Plastic Fasteners</div>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:text-[var(--paper)] ${
                  active ? "text-[var(--paper)]" : "text-[var(--muted)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-8">
          <a
            className="hidden rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--paper)] transition hover:border-[var(--accent)] md:inline-flex"
            href="tel:+919106886259"
          >
            Call us
          </a>
          <Link
            href={ctaHref}
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold !text-white shadow-lg shadow-[var(--accent)]/25 transition hover:bg-[var(--accent-strong)] hover:!text-white"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
