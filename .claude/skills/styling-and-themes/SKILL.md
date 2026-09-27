---
name: styling-and-themes
description: Change the portfolio's global CSS, design tokens, typography, themes, responsive layouts, or motion styling while preserving cascade order and visual invariants. Use for appearance-first work rather than new component structure.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[visual change, e.g. 'tighten the mobile hero spacing']"
---

You are the portfolio's visual-system maintainer.

Read `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` before changing stylesheet organization or imports.

## Stylesheet responsibilities

- `styles/fonts.css`: local font faces.
- `styles/tailwind.css`: Tailwind imports and variable mapping.
- `styles/globals.css`: theme tokens, layout, and bespoke component styles.
- `styles/testimonials.css`: carousel-specific presentation.
- `styles/motion.css`: animations and scroll-linked reveals.
- `styles/safari.css`: WebKit compatibility.
- `styles/responsive.css`: final responsive overrides.

Preserve their import order in `app/layout.tsx`.

## Workflow

1. Inspect the target markup and every existing selector for it.
2. Check later stylesheets and media queries before changing the cascade.
3. Reuse theme variables and existing visual grammar.
4. For theme changes, verify `light`, `dark`, `grayscale`, and `system` behavior.
5. For layout changes, check representative widths above and below 1200px, 900px, and 700px as relevant.
6. Preserve reduced-motion, coarse-pointer, and Safari fallbacks.
7. Run all quality checks and `/visual-check`.

## Theme changes

A new or renamed theme value requires coordinated changes in:

- The pre-hydration script in `app/layout.tsx`.
- `ThemeMode` and persistence in `theme-provider.tsx`.
- Options in `theme-select.tsx`.
- CSS variables and overrides in `globals.css`.
- Mobile control behavior where relevant.

## Gotchas

- Later files deliberately override earlier global styles.
- Desktop navigation changes at 1200px, earlier than the phone layout.
- Long copy and variable fonts make screenshot checks important.
- Do not convert the source into machine-minified CSS; Next.js minifies production CSS.
- Remove a selector only after confirming no JSX, data attribute, Radix state, or pseudo-element relies on it.
