---
name: visual-check
description: Manually verify affected layouts, themes, interactions, accessibility, and motion preferences
---

Use the styling, interaction, and accessibility rules relevant to $ARGUMENTS.

## Matrix

Check only the combinations the change can affect, but include both a wide and narrow viewport for layout changes:

- Desktop near 1440px wide
- Mobile near 390px wide
- Light and dark themes
- Grayscale when color tokens, images, or contrast changed
- System theme when theme resolution changed
- Reduced motion when animation or autoplay changed
- Keyboard operation when controls changed

## What to inspect

- No unintended horizontal overflow or clipping
- Header/mobile-menu switch near 1200px
- Typography, content wrapping, and section spacing
- Focus visibility, labels, tab order, Escape behavior, and live regions
- Broken images, fonts, CV links, external links, or missing icons
- Browser console and runtime errors where available

Capture or compare screenshots when the available tooling supports it. Report the exact viewports and states checked; do not claim a complete browser matrix.
