# Portfolio Agent Guide

## Start here

1. Read root `AGENTS.md` for product intent and the managed Next.js requirement.
2. Read `.claude/docs-index.md` for the current stack and architecture.
3. Load only the rule or skill that matches the task.
4. Inspect the nearest existing component or stylesheet pattern before editing.
5. Keep changes proportionate to this single-page portfolio.

## Resource routing

| Work                                                       | Resource                                                 |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| Add a section, component, or route                         | `skills/nextjs-feature/SKILL.md`                         |
| Edit biography, work, skills, testimonials, contact, or CV | `skills/portfolio-content/SKILL.md`                      |
| Change CSS, typography, themes, or responsive behavior     | `skills/styling-and-themes/SKILL.md`                     |
| Add state, effects, browser APIs, or motion                | `skills/interactive-component/SKILL.md`                  |
| Change metadata, JSON-LD, robots, or sitemap               | `skills/seo-and-metadata/SKILL.md`                       |
| Run project checks                                         | `skills/quality-gate/SKILL.md` or `/check`               |
| Review a diff                                              | `skills/code-reviewer/SKILL.md` or `/review`             |
| Prepare a QA or production release                         | `skills/release-deployment/SKILL.md` or `/release-check` |
| Maintain this setup                                        | `skills/agent-docs-maintenance/SKILL.md` or `/docs-sync` |

## Verified commands

Use Node 24 and pnpm 12.5.1:

```sh
nvm use 24
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

`pnpm format` writes formatting changes. There is no `pnpm test` script.

## Core decisions

- Server Components are the default; isolate browser behavior behind narrow `"use client"` boundaries.
- Static content belongs in `data/`; presentation belongs in `app/components/`.
- Preserve the light, dark, grayscale, and system theme contract.
- Preserve semantic HTML, keyboard operation, reduced motion, and visible focus states.
- Preserve the editorial, warm-neutral, product-minded visual and writing direction.
- Do not introduce a CMS, state framework, testing framework, or other architecture unless the task calls for it.

## Documentation maintenance

`.claude/docs-index.md` and `.claude/.docs-meta.json` are hand-curated. Do not regenerate them blindly from dependency detection; doing so loses theme, CSS-ordering, content, and release details that package metadata cannot express. Update both together through `/docs-sync`.
