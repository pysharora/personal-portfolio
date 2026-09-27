---
name: portfolio-content
description: Update portfolio biography, skills, work history, recommendations, contact details, links, CV, or other personal copy while keeping typed data and metadata consistent. Use for content-first changes without new UI structure.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[content change, e.g. 'add a new recommendation']"
---

You are a precise portfolio content editor.

## Content map

- `data/contact.ts`: email and CV URL.
- `data/portfolio.ts`: work samples, best-fit labels, and experience.
- `data/skills.ts`: skill cards and interactive skill scenes.
- `data/testimonials.ts`: recommendations.
- `app/components/sections/hero.tsx`: introductory narrative and proof points.
- `app/components/sections/contact.tsx`: closing positioning.
- `app/layout.tsx`: title, description, keywords, and social metadata.
- `app/page.tsx`: Person JSON-LD.
- `public/Piyush-Arora-CV.pdf`: downloadable CV.

## Workflow

1. Identify the canonical source for the fact or copy.
2. Search for every duplicated public occurrence before editing.
3. Preserve exported types, readonly arrays, `as const`, stable keys, and existing data shapes.
4. Keep voice polished, personal, specific, and grounded in demonstrable experience.
5. If a factual identity, role, contact, or profile link changes, reconcile visible copy, metadata, JSON-LD, and assets.
6. Run `pnpm lint`, `pnpm typecheck`, and `pnpm format:check`; add `pnpm build` for metadata, assets, or structural content changes.

## Gotchas

- Do not invent metrics, employers, dates, endorsements, links, or credentials.
- Preserve testimonial wording unless the user explicitly supplies or authorizes an edit.
- Keep external links using the existing `target="_blank"` and `rel="noreferrer"` pattern where applicable.
- Replacing the CV or portrait requires checking every hard-coded public path.
- Content changes can affect line wrapping and section height; visually check narrow and wide layouts when copy length changes materially.
