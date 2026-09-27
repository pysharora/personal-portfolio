---
description: TypeScript, React, and file-placement conventions for portfolio application code
globs: ["app/**/*.ts", "app/**/*.tsx", "data/**/*.ts", "lib/**/*.ts"]
---

## Pattern first

- Read the relevant guide in `node_modules/next/dist/docs/` before changing Next.js APIs or conventions.
- Find the closest existing section, card, interactive component, or UI primitive and follow its placement and structure.
- Keep this application small. Do not introduce layers, packages, or frameworks for hypothetical growth.

## React and TypeScript

- Use arrow-function components and strict TypeScript.
- Use Server Components by default. Add `"use client"` only for state, effects, event handlers, context, or browser APIs.
- Keep Client Components narrow; do not move static sections into the client module graph.
- Use named exports for components and default exports only where Next.js route conventions require them.
- Prefer readonly typed data and `as const` for fixed portfolio collections.
- Do not use `any`; narrow `unknown` when external data is introduced.

## Placement

- Page sections: `app/components/sections/`.
- Site chrome and theme controls: `app/components/layout/`.
- Browser-driven behavior: `app/components/interactive/`.
- Repeated content presentation: `app/components/cards/`.
- Reusable primitives: `app/components/ui/` using the existing Radix/CVA pattern.
- Portfolio facts and collection data: `data/`.
- Shared non-component utilities: `lib/`.

Use `@/` imports across concerns and relative imports for nearby component files, matching surrounding code.

## Scope

- Make the smallest complete change.
- Preserve existing product tone, theme behavior, semantics, and responsive design.
- Do not refactor unrelated files or create abstractions used only once without a clear benefit.
- Remove dead code instead of commenting it out.
