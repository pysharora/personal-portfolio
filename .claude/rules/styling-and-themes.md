---
description: Global CSS, Tailwind, responsive, motion, font, and theme invariants
globs: ["styles/**/*.css", "app/layout.tsx", "app/components/**/*.tsx"]
---

## CSS architecture

Keep stylesheet imports in `app/layout.tsx` in this order:

1. `tailwind.css`
2. `globals.css`
3. `motion.css`
4. `safari.css`
5. `responsive.css`

Anton and Inter Tight load through `next/font/google` in `app/layout.tsx`, not a
`@font-face` stylesheet.

Do not auto-sort them. Next.js production builds derive CSS ordering from import order.

- Use semantic global classes for page-level sections and bespoke editorial visuals.
- Reuse existing CSS variables before introducing a new token.
- Put broad layout and component styles in `globals.css`, motion in `motion.css`, WebKit compatibility in `safari.css`, and final breakpoint overrides in `responsive.css`.

## Theme contract

- Preserve the `engineer` and `pm` modes and the hidden `print` theme.
- Themes are CSS variables on `<body>` classes (`pm`, `print`); the inline script in `app/layout.tsx` sets them before paint and `lib/mode-store.ts` is the runtime source of truth.
- Keep the `mode` and `print` storage keys stable unless migration is part of the request.
- Maintain colour contrast in all three themes, including the newsprint portrait filter.

## Responsive and motion

- The header nav collapses at 900px, where the work and quote rows become swipe rows.
- Further breakpoints are 1024px, 700px, 600px, and 480px.
- Preserve reduced-motion, coarse-pointer, and Safari fallbacks.
- Verify engineer, PM, and print at representative desktop and mobile widths after theme or token changes.

## Visual direction

Protect the poster character: giant Anton headlines, one idea per band, hard 2-3px rules, a single accent per theme (orange for engineer, cobalt for PM, ink for print), and deliberate tilt on the highlight blocks. Avoid generic SaaS cards, gradients, excessive rounding, or decorative noise unless explicitly requested.
