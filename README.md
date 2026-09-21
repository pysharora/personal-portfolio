# Personal portfolio

Piyush Arora’s portfolio, built with Next.js, React, TypeScript, and a refined editorial design system.

## Project brief

This portfolio is designed to feel premium, product-led, and personal rather than generic. The visual language leans toward:

- strong serif headlines with a high-end editorial feel
- warm neutral paper backgrounds
- restrained accent colors with a strong contrast ratio
- minimal but polished UI details, not noisy component-heavy layouts
- a utility-first modern feel where appropriate, while still keeping the code readable

The current iteration emphasizes a clean landing page with a strong introductory message, skills overview, and theme customization.

## Local development

Requires Node.js 24 or newer and pnpm 12.5.1. Use nvm to match the project runtime:

```sh
nvm install 24
nvm use 24
pnpm --version
pnpm install
pnpm dev
```

Open http://localhost:3000.

Key files:

- app/page.tsx — page composition
- app/components/ — reusable sections like hero, header, footer, theme switcher
- app/globals.css — visual system, typography, spacing, theme tokens
- app/data/skills.ts — skill grouping and portfolio positioning
- next.config.ts — development logging and terminal visibility

## Theme system

The app supports:

- light mode
- dark mode
- grayscale mode
- system preference as the default fallback

The current theme selection is stored in localStorage under `portfolio-theme` and applied on mount.

## Quality checks

```sh
pnpm format
pnpm format:check
pnpm typecheck
pnpm build
```

`pnpm dev` prints the local URL, compilation status, incoming requests, fetch activity, and browser console output in the terminal. These logs are enabled for development in `next.config.ts`. Stop the server with Ctrl+C.

GitHub Actions or CI workflows should use Node 24 for consistency with the app requirements.

## Agent guidance

When working in this repo, keep the following in mind:

- This project is a Next.js App Router app with a lightweight custom design system.
- Prefer polished, minimal visual changes over generic “vanilla” implementation patterns.
- Maintain the existing editorial aesthetic rather than introducing cluttered or overly playful styles.
- Use modern React patterns and arrow-function components consistently.
- Keep copy intentional, personal, and premium, not overly buzzword-heavy.
- If editing theme handling, preserve the localStorage-based system fallback and the user preference behavior.

This project is intentionally small and opinionated. Future sections should extend the same tone and design language rather than shifting into a drastically different style.
