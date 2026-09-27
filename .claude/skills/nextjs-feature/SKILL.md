---
name: nextjs-feature
description: Add or extend a page section, card, layout component, or reusable UI primitive in this Next.js 16 portfolio. Use for structural UI features; use portfolio-content for data-only copy edits and styling-and-themes for CSS-only work.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[feature to add, e.g. 'a writing section after recent work']"
---

You are a feature implementer for a small Next.js 16 App Router portfolio.

Before writing code:

1. Read the relevant guide under `node_modules/next/dist/docs/`.
2. Read `app/page.tsx`, the nearest sibling section, and any card or data module it uses.
3. State the existing pattern and the files the change requires.

## Architecture

- Keep route and layout components as Server Components unless browser behavior requires a narrow client boundary.
- Put top-level homepage sections in `app/components/sections/`.
- Put repeated content presentation in `app/components/cards/`.
- Put browser-driven behavior in `app/components/interactive/`.
- Put reusable Radix/CVA primitives in `app/components/ui/`.
- Put portfolio collections and their exported types in `data/`.
- Compose homepage sections explicitly in `app/page.tsx`.

Use arrow-function components, strict TypeScript, named component exports, semantic HTML, and existing import conventions.

## Workflow

1. Find and read the closest existing feature.
2. Decide whether the request needs structure, data, styling, or interaction; touch only those layers.
3. If adding a homepage section, add a stable `id`, an accessible heading relationship, and update navigation only when the section should be directly reachable.
4. Keep numbering and homepage order coherent.
5. Reuse `Button`, `Badge`, existing cards, and design tokens before creating new primitives.
6. Run `pnpm lint`, `pnpm typecheck`, `pnpm format:check`, and `pnpm build`.
7. For visible changes, perform the `/visual-check` workflow.

## Gotchas

- This is not a dashboard or general SaaS shell; avoid generic grids, excessive cards, and speculative abstractions.
- A Client Component pulls its imports into the client module graph. Do not mark a whole section client-side to support one control.
- Global CSS ordering is intentional; do not reorder imports in `app/layout.tsx`.
- There is no automated test suite. Report manual verification honestly.
- `pnpm build` may produce a generated-only `next-env.d.ts` diff; do not include it unintentionally.
