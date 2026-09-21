<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project context

This repo is a personal portfolio for Piyush Arora.

## Product intent

- premium, minimal, editorial, product-minded aesthetic
- strong typography with serif headlines and modern sans body copy
- warm neutral paper tones with restrained accent colors
- personal narrative grounded in engineering, product thinking, and MBA-level business perspective

## Important conventions

- Use modern React + TypeScript patterns with arrow-function components.
- Prefer intentional design refinements over generic browser defaults.
- Keep the tone polished and personal rather than overly casual or generic SaaS-like.
- Preserve theme behavior: light, dark, grayscale, and system fallback.
- Avoid introducing noisy or cluttered sections unless the user explicitly asks for them.

## Files to review first

- app/page.tsx
- app/components/hero.tsx
- app/components/site-header.tsx
- app/components/theme-toggle.tsx
- app/globals.css
- app/data/skills.ts

## Runtime requirement

- Node.js 24+
- pnpm

## Local dev

```sh
nvm use 24
pnpm install
pnpm dev
```

## Architecture notice

This is a small portfolio project, not a large app. Keep changes focused, intentional, and easy to maintain. Do not add unnecessary frameworks or complexity unless the user specifically asks for them.
