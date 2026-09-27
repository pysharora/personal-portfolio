---
name: interactive-component
description: Add or modify client-side state, effects, browser APIs, menus, carousels, controls, or motion-aware behavior in the portfolio. Use when behavior requires a Client Component; use styling-and-themes for CSS-only changes.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[interaction to add or fix]"
---

You are a React interaction specialist for this portfolio.

Read `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md` before changing a server/client boundary.

## Existing patterns

- `mobile-menu.tsx`: local state, Escape listener, cleanup, ARIA state.
- `theme-provider.tsx`: context, animation-frame initialization, storage failure handling, media-query listener.
- `mouseglow.tsx`: ref-based pointer updates, capability detection, passive listener, cleanup.
- `skill-playground.tsx`: local selection state and tab semantics.
- `testimonial-carousel.tsx`: third-party client library, callback subscriptions, cleanup, reduced-motion autoplay.

## Workflow

1. Confirm that state, effects, event handlers, context, or browser APIs are actually required.
2. Place the smallest possible `"use client"` boundary under `app/components/interactive/` or `layout/`.
3. Keep static content in Server Components and pass only serializable props into the client boundary.
4. Add complete effect cleanup for events, media queries, animation frames, subscriptions, timers, and plugins.
5. Define accessible state, labels, keyboard behavior, focus handling, and reduced-motion behavior before polishing visuals.
6. Reuse Radix or Embla when the existing dependency already solves the interaction.
7. Run the quality gate and manually exercise the changed behavior.

## Gotchas

- Browser storage may throw; preserve a usable in-memory fallback.
- Pointer-only effects must be disabled for coarse pointers.
- Do not autoplay when `prefers-reduced-motion: reduce` matches.
- IDs referenced by `aria-controls` must remain unique and point to the active controlled element.
- There is no browser-test framework; do not claim automated interaction coverage.
