# AGENTS.md – SiteStudio

## Project overview

SiteStudio is a bilingual (LT/EN) portfolio and lead-generation website for a web development freelancer based in Brussels, Belgium. It is built with Next.js 14, React, TypeScript, Tailwind CSS and next-intl.

## Technology stack

- Framework: Next.js 14.2.5 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 3.4
- i18n: next-intl 3.26
- UI icons: lucide-react
- Contact API: Nodemailer (POST /api/contact)

## Project structure

```
src/
  app/
    layout.tsx              # Root layout (renders children only)
    [locale]/
      layout.tsx            # Locale layout with html/body, metadata, i18n provider
      page.tsx              # Home page with all sections
      privacy-policy/
        page.tsx            # Privacy policy page
    api/contact/route.ts    # Contact form endpoint
    sitemap.ts              # Sitemap generator
    robots.ts               # robots.txt generator
  components/
    layout/                 # Navbar, Footer
    sections/               # Hero, Services, Portfolio, About, FAQ, Contact
    ui/                     # CookieBanner, ParticleCanvas, TiltCard
    seo/                    # StructuredData (JSON-LD)
  i18n/                     # Routing and request config
  lib/                      # Portfolio data
messages/                   # LT and EN translations
public/                     # Static assets, opengraph-image.png, pricing.md, llms.txt
```

## Conventions

- All user-facing text lives in `messages/lt.json` and `messages/en.json`.
- Client components use `"use client"`.
- Server components are the default.
- Use `next/image` for images when possible; external portfolio screenshots use WordPress mshots.
- Keep accessibility in mind: aria-labels, semantic HTML, proper heading hierarchy.

## SEO / GEO / AEO notes

- Metadata is locale-aware and generated in `[locale]/layout.tsx`.
- Canonical URLs and hreflang alternates are set via `metadata.alternates`.
- JSON-LD structured data is rendered by `src/components/seo/StructuredData.tsx`.
- FAQ section provides AI-extractable question-answer blocks.
- `/pricing.md` and `/llms.txt` are exposed for AI agents and search engines.

## Build and deploy

```bash
npm install
npm run build
npm start
```

## Contact

For questions about this project, contact viktor@sitestudio.lt.
