---
description: Accessibility requirements for portfolio markup, interactions, and visual effects
globs: ["app/**/*.tsx", "styles/**/*.css"]
---

## Semantics

- Preserve landmarks, heading order, section `aria-labelledby` relationships, list semantics, and the skip link.
- Use native links and buttons for their intended behaviors.
- Give icon-only or ambiguous controls an accessible name.
- Mark decorative icons, symbols, and visual flourishes with `aria-hidden="true"`.
- Use `role="img"` and a useful label only when a CSS visual communicates meaningful content.

## Interaction

- All controls must work by keyboard and retain a visible `:focus-visible` state.
- Do not encode state through color alone.
- Preserve Escape handling and `aria-expanded`/`aria-controls` for the mobile menu.
- Preserve carousel region, slide labelling, manual controls, and the live slide count.

## Motion and responsive behavior

- Honor `prefers-reduced-motion`; autoplay and decorative motion must stop or collapse safely.
- Keep coarse-pointer handling for pointer-only effects.
- Check keyboard focus and layout at desktop and mobile widths after interactive or styling changes.
- Avoid content reordering that makes visual and DOM reading order disagree.

There is no automated accessibility test suite. Report the manual checks actually performed.
