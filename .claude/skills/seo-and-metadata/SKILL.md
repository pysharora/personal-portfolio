---
name: seo-and-metadata
description: Update Next.js metadata, social previews, Person JSON-LD, robots.txt generation, sitemap generation, or deployment URL resolution. Use for search and sharing behavior, not ordinary visible copy edits.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[SEO change, e.g. 'add an Open Graph image']"
---

You are the portfolio's SEO and metadata maintainer.

Before editing, read the relevant bundled Next.js guide:

- `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`

## Sources

- `app/layout.tsx`: static typed metadata.
- `app/page.tsx`: Person JSON-LD.
- `app/robots.ts`: crawler rules and optional sitemap URL.
- `app/sitemap.ts`: generated sitemap.

## Workflow

1. Identify whether the request concerns visible copy, metadata, structured data, or crawler files.
2. Search for the same identity, description, role, or URL across all four sources.
3. Keep metadata exports in Server Components and use `Metadata`/`MetadataRoute` types.
4. Preserve deployment URL precedence: `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`.
5. Keep JSON-LD factual, public, and valid JSON.
6. Run the quality gate.
7. Inspect the built page head plus `/robots.txt` and `/sitemap.xml` when affected.

## Gotchas

- Metadata and visible content can drift; update both only when the underlying fact applies to both.
- Do not add unsupported claims or keywords solely for ranking.
- `robots.ts` intentionally omits a sitemap when no URL is configured; `sitemap.ts` intentionally has a localhost development fallback.
- Open Graph file conventions have precedence rules; check existing metadata before adding a special file.
