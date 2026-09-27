---
description: Global CSS, Tailwind, responsive, motion, font, and theme invariants
globs: ["styles/**/*.css", "app/layout.tsx", "app/components/**/*.tsx"]
---

## CSS architecture

Keep stylesheet imports in `app/layout.tsx` in this order:

1. `fonts.css`
2. `tailwind.css`
3. `globals.css`
4. `testimonials.css`
5. `motion.css`
6. `safari.css`
7. `responsive.css`

Do not auto-sort them. Next.js production builds derive CSS ordering from import order.

- Use semantic global classes for page-level sections and bespoke editorial visuals.
- Use Tailwind/CVA for reusable UI primitives following `Button` and `Badge`.
- Reuse existing CSS variables before introducing a new token.
- Put broad layout and component styles in `globals.css`, testimonial-only rules in `testimonials.css`, animations in `motion.css`, WebKit compatibility in `safari.css`, and final breakpoint overrides in `responsive.css`.

## Theme contract

- Preserve `light`, `dark`, `system`, and `grayscale`.
- Keep theme validation synchronized across `app/layout.tsx`, `theme-provider.tsx`, and `theme-select.tsx`.
- Keep the `portfolio-theme` storage key stable unless migration is part of the request.
- Maintain color contrast and intentional grayscale behavior, including the portrait filter.

## Responsive and motion

- The desktop header switches to mobile navigation at 1200px.
- Existing tablet and phone behavior uses 900px and 700px boundaries.
- Preserve reduced-motion, coarse-pointer, and Safari fallbacks.
- Verify all four themes at representative desktop and mobile widths after theme or token changes.

## Visual direction

Protect the premium editorial character: warm paper tones, expressive typography, restrained blue/green/pink accents, crisp borders, and deliberate asymmetry. Avoid generic SaaS cards, gradients, excessive rounding, or decorative noise unless explicitly requested.
