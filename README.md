# SAK Fasteners Website

Maroon/red/white 2026-styled site for SAK Fasteners. Built with Next.js (App Router), TypeScript, and Tailwind v4 for speed, SEO/AEO readiness, and geo-friendly contact flows.

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (utility-first, inline theme tokens)
- next/font with Space Grotesk (display) and Manrope (body)
- JSON-LD schema (FAQ + Organization), sitemap.xml, robots.txt

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Production Build
```bash
npm run build
npm start
```
`npm start` runs the built app on port 3000. For Hostinger VPS, point your reverse proxy (e.g., Nginx) to http://127.0.0.1:3000 and serve https://www.sakfasteners.com via TLS. Keep `baseUrl` values in layout.tsx, sitemap.ts, and robots.txt/route.ts aligned with the live domain.

## Structure
- Home: hero, spec picker, product highlights, industries, geo coverage, RFQ CTA, FAQ (AEO-friendly)
- /products: category cards and stocking philosophy
- /industries: sector-specific needs and solutions
- /resources: torque charts, coating and material guides, micro FAQ
- /contact: RFQ form, geo hubs (Houston/Dubai/Mumbai), NAP consistency
- SEO: Open Graph/Twitter metadata, JSON-LD (FAQ + Organization), sitemap.xml, robots.txt

## Content / Design Notes
- Theme tokens in globals.css (maroon/red/white, glass panels, grid texture)
- Header/footer carry CTA, phone, email, and location signals for GEO strength
- FAQs and resource callouts are phrased for featured snippets/voice answers

## Next Steps
- Replace placeholder contact numbers/emails as needed.
- Add real assets for /og-image.png and /logo.png in public/ before launch.
- If you need CMS or MDX content, add a headless CMS and map fields into the existing sections.

