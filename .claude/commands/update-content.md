---
name: update-content
description: Apply a content-first portfolio update and reconcile duplicated public facts
---

Use `.claude/skills/portfolio-content/SKILL.md` with $ARGUMENTS.

## Workflow

1. Locate the canonical source in `data/`, the hero/contact sections, metadata, or JSON-LD.
2. Search for every occurrence of the changed fact or link.
3. Preserve existing data types, readonly collections, keys, and tone.
4. Do not invent missing facts; ask for the exact value when it materially changes the result.
5. Run `pnpm lint`, `pnpm typecheck`, and `pnpm format:check`.
6. Run `pnpm build` for metadata, asset, or structural content changes.
7. Use `/visual-check` when changed copy can alter wrapping or section height.
