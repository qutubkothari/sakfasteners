"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const backgroundImages = [
  "/hero/factory-floor.jpg",
  "/hero/heat-treatment.jpg",
  "/hero/quality-control.jpg",
  "/hero/export-packaging.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(248,247,245,0.88) 50%, rgba(255,255,255,0.85) 100%), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Static Foreground Content */}
      <div className="relative z-10 px-8 py-16">
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
                className="flex items-center gap-2 rounded-full border-2 border-[var(--accent)]/30 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-[var(--paper)] shadow-sm"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-strong)] bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/5"
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
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="h-2 w-2 rounded-full transition-all"
            style={{
              backgroundColor: currentIndex === index ? "var(--accent-strong)" : "rgba(124, 29, 46, 0.3)",
              width: currentIndex === index ? "24px" : "8px",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
