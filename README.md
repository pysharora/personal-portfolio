# Personal portfolio

Piyush Arora's personal site, built with Next.js, React, and TypeScript. The
homepage is a big-type poster that reframes itself for two audiences —
Engineer and PM — plus a hidden newsprint "print" theme.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript (strict)
- Plain semantic CSS — no Tailwind, no CSS-in-JS, no UI kit
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
  for Anton + Inter Tight
- [@vercel/analytics](https://vercel.com/docs/analytics)
- ESLint, Prettier, `tsc --noEmit` for quality gates

## Development

Requires Node.js 24+ and pnpm 12.5.1.

```sh
nvm use 24
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project structure

- `app/` — routes, the root layout, and route-level metadata (`sitemap.ts`,
  `robots.ts`, `icon.tsx`).
- `components/` — every section and piece of site chrome, one PascalCase file
  per component (`Hero.tsx`, `Work.tsx`, `SiteHeader.tsx`, `ModeGate.tsx`, …).
- `components/ui/` — small shared pieces (`ModeSwitch`, `Icons`).
- `context/` — `ModeContext.tsx`, the engineer/PM mode provider.
- `data/` — all portfolio copy as typed arrays/objects, separate from
  presentation. Editing content here is almost always enough — components
  read from `data/` and don't hardcode copy.
- `styles/` — global CSS split by concern (`globals.css`, `motion.css`,
  `safari.css`, `responsive.css`). Import order in `app/layout.tsx` is
  intentional; don't auto-sort it.
- `lib/` — mode constants and the mode store, the layout's pre-paint init
  scripts, and small hooks.
- `public/` — the portrait, OG image, and both CVs.
- `design-reference/` — static HTML mockups (`index.html`, `gate.html`) used
  as the literal source of truth while building the poster layout and the
  mode gate. Keep these; they're the design spec, not dead code.

To add a project, quote, job, or tweak any copy, edit the matching file in
`data/` — you shouldn't need to touch a component.

## How the Engineer/PM switch, print theme, and CVs work

- **Mode** (`engineer` | `pm`) is resolved **only** from the `?mode=` query
  param — never `localStorage`, never the URL hash (the header nav's section
  links already use the hash). No param means no mode is set yet.
- On a first visit with no `?mode=`, `ModeGate` (`components/ModeGate.tsx`)
  shows a boot animation then a "Pick your build" split screen; choosing a
  side writes `?mode=` to the URL and reveals the real homepage, which stays
  in the DOM the whole time (never `display: none`) so crawlers always see
  full content — it's just made `inert` while the gate is up.
- The header's "Engineer / PM" pill and the footer's "Change view" link both
  flip or reopen the mode via `context/ModeContext.tsx`.
- Triple-tapping the wordmark in the header toggles a hidden `print` theme
  (stored in `localStorage`, independent of mode) — grayscale, newsprint
  styling, mainly for printing or a CV-reader view.
- Each mode links to its own CV: `public/cv-engineer.pdf` and
  `public/cv-pm.pdf` (`data/contact.ts`).

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

Run `pnpm format` to format the project. There is no test suite — verify
visual/interactive changes manually (Engineer, PM, and print, at desktop and
mobile widths).

## Deployment

GitHub Actions deploys to Vercel:

- **Deploy QA:** `master` pushes and merges deploy to Vercel Preview.
- **Deploy Production:** version tags such as `v1.0.0` deploy to Production.
- Tags containing a hyphen, such as `v1.0.0-rc.1`, do not deploy.

To release, tag the commit tested in QA:

```sh
git tag v1.0.0 <commit-sha>
git push origin v1.0.0
```

## How this codebase works

`app/page.tsx` composes typed sections (`Hero`, `KindWords`, `Work`,
`Experience`, `Contact`) inside `app/layout.tsx`, which also renders the
mode gate. Everything server-renders by default; a component only becomes a
`"use client"` boundary when it genuinely needs state, effects, or a browser
API (a counter, a carousel, a tilt effect, the gate itself). All copy lives
in `data/`, all mode/theme state resolves from the URL or `localStorage`
through `lib/mode-store.ts` and `context/ModeContext.tsx`, and all styling is
plain CSS in `styles/`. No CMS, no state library, no component framework —
just React, data files, and CSS.
