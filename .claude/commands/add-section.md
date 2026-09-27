---
name: add-section
description: Add a homepage section using the repository's section, data, card, navigation, and CSS patterns
---

Use `.claude/skills/nextjs-feature/SKILL.md` with $ARGUMENTS as the requested section.

## Workflow

1. Read `app/page.tsx`, the closest section, its data source, and its active styles.
2. Read the relevant bundled Next.js documentation.
3. Propose the minimal file set if placement or interaction is ambiguous.
4. Create the section under `app/components/sections/`.
5. Put repeated content in `data/` and card presentation in `app/components/cards/` when justified.
6. Add a stable ID and accessible heading relationship.
7. Update `app/page.tsx`, navigation, numbering, and styles only where required.
8. Run `/check` and `/visual-check`.

Do not add a Client Component unless the section genuinely needs browser behavior.
