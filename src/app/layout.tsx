import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChatWidget } from "@/components/ChatWidget";

const display = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display",
  display: "swap",
});
const body = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sakfasteners.com"),
  title: "SAK Fasteners LLP | Metal & Plastic Fasteners Manufacturer Since 2014",
  description:
    "SAK Fasteners LLP manufactures metal & plastic fasteners including Nylon Frame Fixing Anchors, Plastic Wall Plugs, Self Tapping Screws, Self Drilling Screws, Drywall Screws & Rack Bolts. Serving India and Middle East.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "fasteners manufacturer India",
    "fasteners manufacturer Ahmedabad",
    "nylon frame anchors India",
    "plastic wall plugs Middle East",
    "self tapping screws manufacturer",
    "self drilling screws India",
    "drywall screws Ahmedabad",
    "SAK Fasteners Ahmedabad",
    "rack bolts manufacturer",
    "metal fasteners India",
    "plastic fasteners Middle East",
    "construction fasteners India",
    "quality fasteners manufacturer",
    // Client-search synonyms and common queries
    "Nylon Anchor",
    "Nylon Frame Anchor",
    "NFF",
    "Nylon Frame Fixing",
    "Nylon Frame Fixing Anchor Fasteners",
    "Nylon Gitti",
    "uPVC Doors and Windows Fasteners",
    "8x80 NFF",
    "8x100 NFF",
    "10x100 NFF",
    "Manufacturers of Nylon Anchor",
  ],
  openGraph: {
    title: "SAK Fasteners LLP | Metal & Plastic Fasteners Manufacturer Since 2014",
    description:
      "Leading manufacturers of Nylon Frame Fixing Anchors, Plastic Wall Plugs, Self Tapping Screws, Self Drilling Screws, Drywall Screws & Rack Bolts for India and Middle East.",
    url: "https://www.sakfasteners.com",
    siteName: "SAK Fasteners",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAK Fasteners hero preview",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["sales@sakfasteners.com"],
    phoneNumbers: ["+91 7737835253"],
  },
  other: {
    "article:publisher": "SAK Fasteners LLP",
    "article:modified_time": new Date().toISOString(),
    "og:locality": "Ahmedabad",
    "og:region": "Gujarat",
    "og:country-name": "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAK Fasteners | Precision Industrial Fastening Solutions",
    description:
      "Industrial fasteners with engineering-grade QA, rapid delivery, and geo-responsive support.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.sakfasteners.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-[var(--bg)] text-[var(--paper)]`}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[var(--accent)] blur-3xl" />
            <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-[var(--accent)] blur-3xl" />
          </div>
          <Header />
          <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">{children}</main>
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
