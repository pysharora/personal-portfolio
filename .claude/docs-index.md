# Docs Index

<!-- Curated guidance for the personal portfolio. -->
<!-- Refresh manually with `.claude/commands/docs-sync.md`; dependency detection alone is insufficient. -->

**Detected stack:** node 24, pnpm 12.5.1, typescript 6, next.js 16.4.x, react 19, next/font, vercel analytics, vercel, github actions

| Category           | Technologies                                 |
| ------------------ | -------------------------------------------- |
| language           | TypeScript, CSS                              |
| runtime            | Node.js 24+                                  |
| package management | pnpm 12.5.1                                  |
| web                | Next.js 16 App Router, React 19              |
| UI                 | Semantic global CSS (no utility framework)   |
| type               | Anton + Inter Tight via `next/font`          |
| interaction        | CSS transitions, WAAPI, IntersectionObserver |
| quality            | ESLint 9, strict TypeScript, Prettier 3      |
| delivery           | GitHub Actions, Vercel                       |

---

## Repository shape

This is one small application, not a monorepo. There is no `turbo.json`; package scripts invoke tools directly.

- `app/`: routes, metadata, root layout.
- `components/`: all presentational and interactive components, one file per component (PascalCase).
- `components/ui/`: small shared pieces (`ModeSwitch`, `Icons`).
- `context/`: `ModeContext.tsx` — the engineer/PM mode provider.
- `data/`: typed portfolio content and contact constants.
- `styles/`: global CSS split by concern.
- `lib/`: mode constants, the mode store, the layout init scripts, small hooks, and the site URL helper.
- `public/`: portrait, OG image, and both CVs.

The site is intentionally compact today, but it should scale by confirmed need: add typed content and focused components first, then introduce new routes, external content sources, persistence, or integrations only when a real requirement justifies them. BMAD planning is available for those larger phases without forcing extra runtime architecture into the current app.

## Next.js 16 and React 19

- Before editing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`; the managed block in `AGENTS.md` requires this.
- Pages and layouts are Server Components by default. Add `"use client"` only for state, effects, event handlers, context, or browser APIs.
- Keep client boundaries narrow because everything imported by a Client Component joins its client module graph.
- Current client boundaries are the mode provider and switch, the wordmark print toggle, the hero headline, the stat counters, the tilt cards, the quote carousel, the experience accordion, and the scroll reveal.
- Metadata exports are server-only. `app/robots.ts` and `app/sitemap.ts` use the typed Next.js metadata file conventions.

## Component and content flow

`app/page.tsx` composes the homepage in this order:

`SiteHeader → Hero → KindWords → Work → Experience → Contact → SiteFooter`

Typed static content flows from `data/*.ts` into sections and then into interactive components. Mode-specific copy is rendered for both sides and hidden with `[data-only="eng"|"pm"]`, so sections stay Server Components. Keep portfolio facts out of presentation components unless the copy is structural to that component.

## Mode and theme contract

The page has two modes, `engineer` and `pm`, plus a hidden `print` theme.

- `app/layout.tsx`: an inline script resolves `#pm`/`#engineer`, then `localStorage`, then engineer, and sets the `pm`/`print`/`js` classes on `<body>` before paint.
- `lib/mode.ts`: mode type, storage keys, and theme colours used by the wipe.
- `lib/mode-store.ts`: reads and writes the body classes; React subscribes through `useSyncExternalStore`.
- `context/ModeContext.tsx`: context plus the circular colour wipe (instant under reduced motion).
- `components/ui/ModeSwitch.tsx` and `components/PrintThemeName.tsx`: the switch and the three-tap wordmark.
- `styles/globals.css`: theme variables, `[data-only]` visibility, and the CSS-driven switch pill.

Storage keys are `mode` and `print`.

## Styling and CSS order

Global styles are imported once from `app/layout.tsx` in cascade-sensitive order:

1. `styles/globals.css`
2. `styles/motion.css`
3. `styles/safari.css`
4. `styles/responsive.css`

Do not auto-sort these imports. Semantic global classes style everything — there is no utility CSS framework. Breakpoints at 1024px, 900px, 700px, 600px, and 480px are intentional. Preserve reduced-motion, coarse-pointer, and Safari behavior.

## Accessibility

- Retain the skip link, landmarks, heading relationships, list semantics, and labeled navigation.
- Mark decorative icons and flourishes `aria-hidden="true"`.
- Interactive controls require accessible names, keyboard behavior, and visible focus states.
- The quote carousel must keep its labelled scroll region, manual controls, and live count.
- The experience accordion must keep `aria-expanded`, `aria-controls`, and `inert` collapsed panels, and must stay readable with JavaScript disabled.
- Validate desktop and mobile layouts because there is no automated browser test suite.

## Content and assets

- Contact constants, CV paths, and social links live in `data/contact.ts`.
- Hero eyebrow, headline, intro, and stats live in `data/hero.ts`.
- Work samples, the `SHOW_SLOW_DAYS` flag, and experience live in `data/portfolio.ts`.
- Recommendations live in `data/testimonials.ts`; quotes are people's own words, never edited.
- Assets: `public/piyush.jpg`, `public/og-image.png`, `public/cv-engineer.pdf`, `public/cv-pm.pdf`.
- Keep writing polished, personal, specific, and product-minded. Avoid generic SaaS copy.

## SEO and site URLs

- Static metadata and the `next/font` loaders live in `app/layout.tsx`; `lib/site-url.ts` resolves the deployment URL for `metadataBase`, robots, and the sitemap.
- Person JSON-LD lives in `app/page.tsx`.
- `app/robots.ts` and `app/sitemap.ts` resolve URLs in this order: `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`.
- `sitemap.ts` falls back to `http://localhost:3000`; `robots.ts` omits the sitemap when no URL is available.
- Update visible identity, metadata, JSON-LD, social links, and contact data together when the underlying fact changes.

## Quality commands

From the repository root, with Node 24 active:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

All commands were verified on 2026-11-21. `pnpm build` prerenders `/`, `/_not-found`, `/robots.txt`, and `/sitemap.xml`.

There is no automated test script or configured test framework. Do not claim tests passed. Use proportionate manual interaction and visual checks for behavioral or visual changes.

`pnpm build` can rewrite tracked imports in generated `next-env.d.ts` between `.next/dev/types` and `.next/types`. Do not include that generated-only diff unless the task intentionally changes it.

## CI and deployment

- Pull requests run `pnpm format:check`, `pnpm typecheck`, and `pnpm build` in `.github/workflows/ci.yml`.
- `pnpm lint` is valid and should be run locally even though CI currently omits it.
- Pushes to `master` deploy a Vercel Preview through the `qa` GitHub environment.
- Stable tags matching `v*` deploy to production; tags containing a hyphen are excluded.
- Vercel automatic Git deployment is disabled in `vercel.json`.
- Deploy workflows require `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.
- Do not push branches, create tags, or trigger deployments without explicit user authorization.

## Existing documentation

- `README.md`: human setup, structure, checks, and release instructions.
- `AGENTS.md`: product intent, project conventions, runtime, and managed Next.js notice.
- `CLAUDE.md`: Claude entry point and resource routing.
- `.claude/commands/bmad-*.md`: gated discovery, architecture, implementation, and delivery workflow for larger initiatives.
- `.claude/commands/ralph.md`: agent-team implementation with bounded context, exclusive ownership, and acceptance validation.

Link to these sources instead of duplicating their full contents in skills.

## Manual maintenance caveat

This index is deliberately hand-curated. Automated dependency detection cannot recover CSS import order, theme invariants, client boundaries, personal writing direction, missing-test status, or release authorization boundaries. When the stack or architecture changes, audit the repository and update this file together with `.claude/.docs-meta.json`; never regenerate it blindly.
