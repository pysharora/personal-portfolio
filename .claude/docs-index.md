# Docs Index

<!-- Curated guidance for the personal portfolio. -->
<!-- Refresh manually with `.claude/commands/docs-sync.md`; dependency detection alone is insufficient. -->

**Detected stack:** node 24, pnpm 12.5.1, typescript 6, next.js 16.3.5, react 19, tailwind 4, radix ui, cva, embla carousel, vercel analytics, vercel, github actions

| Category           | Technologies                            |
| ------------------ | --------------------------------------- |
| language           | TypeScript, CSS                         |
| runtime            | Node.js 24+                             |
| package management | pnpm 12.5.1                             |
| web                | Next.js 16 App Router, React 19         |
| UI                 | Tailwind CSS 4, Radix UI, CVA, Lucide   |
| interaction        | Embla Carousel, React state/effects     |
| quality            | ESLint 9, strict TypeScript, Prettier 3 |
| delivery           | GitHub Actions, Vercel                  |

---

## Repository shape

This is one small application, not a monorepo. `turbo.json` exists, but package scripts invoke tools directly.

- `app/`: routes, metadata, root layout, and components.
- `app/components/layout/`: site chrome, navigation, theme controls, and provider.
- `app/components/sections/`: top-level homepage sections.
- `app/components/interactive/`: narrow Client Components.
- `app/components/cards/`: content presentation components.
- `app/components/ui/`: reusable Radix/CVA primitives.
- `data/`: typed portfolio content and contact constants.
- `styles/`: global CSS split by concern.
- `lib/`: shared utilities.
- `public/`: fonts, portrait, and CV.

The site is intentionally compact today, but it should scale by confirmed need: add typed content and focused components first, then introduce new routes, external content sources, persistence, or integrations only when a real requirement justifies them. BMAD planning is available for those larger phases without forcing extra runtime architecture into the current app.

## Next.js 16 and React 19

- Before editing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`; the managed block in `AGENTS.md` requires this.
- Pages and layouts are Server Components by default. Add `"use client"` only for state, effects, event handlers, context, or browser APIs.
- Keep client boundaries narrow because everything imported by a Client Component joins its client module graph.
- Current client boundaries are theme controls, mobile navigation, mouse glow, skills playground, and testimonial carousel.
- Metadata exports are server-only. `app/robots.ts` and `app/sitemap.ts` use the typed Next.js metadata file conventions.

## Component and content flow

`app/page.tsx` composes the homepage in this order:

`SiteHeader → Hero → Skills → RecentWork → Experience → Testimonials → Contact → SiteFooter`

Typed static content flows from `data/*.ts` into sections and then cards or interactive components. Keep portfolio facts out of presentation components unless the copy is structural to that component.

## Theme contract

Supported theme values are `light`, `dark`, `system`, and `grayscale`.

- `app/layout.tsx`: initializes the saved theme before hydration to prevent a flash.
- `app/components/layout/theme-provider.tsx`: owns state, persistence, and system preference changes.
- `app/components/layout/theme-select.tsx`: renders Radix desktop controls and a native mobile select.
- `styles/globals.css`: defines theme variables and themed overrides.
- `styles/responsive.css`: switches header and theme control behavior at responsive breakpoints.

The storage key is `portfolio-theme`. A theme change normally touches all four layers above; keep initialization and provider validation aligned.

## Styling and CSS order

Global styles are imported once from `app/layout.tsx` in cascade-sensitive order:

1. `styles/fonts.css`
2. `styles/tailwind.css`
3. `styles/globals.css`
4. `styles/testimonials.css`
5. `styles/motion.css`
6. `styles/safari.css`
7. `styles/responsive.css`

Do not auto-sort these imports. Semantic global classes style page-level components; Tailwind/CVA style reusable `Button` and `Badge` primitives. Breakpoints at 1200px, 900px, and 700px are intentional. Preserve reduced-motion, coarse-pointer, and Safari behavior.

## Accessibility

- Retain the skip link, landmarks, heading relationships, list semantics, and labeled navigation.
- Mark decorative icons and flourishes `aria-hidden="true"`.
- Interactive controls require accessible names, keyboard behavior, and visible focus states.
- Carousel changes must preserve slide labelling, live count updates, manual controls, and reduced-motion autoplay behavior.
- Validate desktop and mobile layouts because there is no automated browser test suite.

## Content and assets

- Contact constants and the CV path live in `data/contact.ts`.
- Work and experience live in `data/portfolio.ts`.
- Skills and playground scenes live in `data/skills.ts`.
- Recommendations live in `data/testimonials.ts`.
- The CV is `public/Piyush-Arora-CV.pdf`; the portrait is `public/piyush-portrait-optimized.jpg`.
- Keep writing polished, personal, specific, and product-minded. Avoid generic SaaS copy.

## SEO and site URLs

- Static metadata and font preloads live in `app/layout.tsx`.
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

All commands were verified on 2026-09-27. `pnpm build` prerenders `/`, `/_not-found`, `/robots.txt`, and `/sitemap.xml`.

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
