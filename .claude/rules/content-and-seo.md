---
description: Personal copy, typed content data, public assets, metadata, JSON-LD, robots, and sitemap rules
globs:
  [
    "data/**/*.ts",
    "app/layout.tsx",
    "app/page.tsx",
    "app/robots.ts",
    "app/sitemap.ts",
    "public/**",
  ]
---

## Content

- Keep factual collections in `data/` and presentation in components.
- Preserve readonly array types and stable keys when editing collection entries.
- Write in a polished, personal, specific voice grounded in engineering, product judgment, and business context.
- Avoid generic SaaS language, inflated claims, filler, and unsupported metrics.
- When changing identity or contact facts, audit visible copy, metadata, JSON-LD, social links, and public assets for consistency.

## Assets

- Keep public URLs rooted at `/`; the CV path is `/Piyush-Arora-CV.pdf`.
- Optimize replacement images and fonts before committing them.
- Do not remove or rename referenced assets without updating every caller.

## SEO

- Metadata exports stay in Server Components.
- Preserve typed `Metadata` and `MetadataRoute` APIs.
- Keep Person JSON-LD valid and derived only from public facts.
- Preserve site URL resolution order: `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`.
- `sitemap.ts` may fall back to localhost for development; `robots.ts` should omit a sitemap when no deployment URL exists.
- Validate `/robots.txt` and `/sitemap.xml` after relevant changes.
