# Website Template

A bare-bones, SEO-centric Next.js site you can clone for many different businesses.

## Pages

- `/` — Home
- `/product` — Product
- `/about` — About
- `/contact` — Contact (form includes a honeypot field)

## Customize for a new business

1. Edit `src/lib/site.ts` (brand, URL, locale, theme, AI crawler policy, social `sameAs`, etc.).
2. Copy `.env.example` → `.env.local` and set verification tokens if needed.
3. Update each page’s `buildMetadata({ title, description, path })` call (title ≤ 60 chars; description 120–160).
4. Swap placeholder copy and images for real content.
5. Wire `ContactForm` to your form endpoint / API / CRM.
6. Optional: set `searchPath` to enable WebSite `SearchAction` in JSON-LD.
7. Optional: replace generated `icon.tsx` / `apple-icon.tsx` with real `icon.png` / `apple-icon.png`.

## SEO foundation

- `buildMetadata()` + `absoluteUrl()` for consistent titles, descriptions, canonicals, OG, Twitter
- Generated Open Graph / Twitter images (`next/og`) + per-route OG images
- Generated favicon / Apple icon + `manifest.webmanifest`
- JSON-LD `@graph`: Organization, WebSite, per-page WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList
- `sitemap.xml` and `robots.txt` (with `aiCrawlerPolicy`)
- Viewport `themeColor`, verification meta (env), `formatDetection`, `referrer`
- Semantic headings and word-count targets on content sections

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
