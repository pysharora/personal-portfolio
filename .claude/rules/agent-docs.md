---
description: Maintenance rules for agent documentation, skills, commands, and registries
globs: ["AGENTS.md", "CLAUDE.md", ".claude/**"]
---

## Sources of truth

- Keep the Next.js-managed marker block in `AGENTS.md` unchanged.
- Root `AGENTS.md` owns product intent and high-level repository constraints.
- `.claude/docs-index.md` owns curated stack and architecture discovery.
- Rules own cross-cutting invariants; skills own focused workflows; commands invoke repeatable procedures; agents compose skills.
- Link instead of copying large sections between layers.

## Skill quality

- Use lowercase kebab-case directory names matching frontmatter `name`.
- Descriptions must say what the skill does and when it should trigger.
- Keep implementation skills writable and review/release skills read-only where possible.
- Add `evals.json` when neighboring skills could plausibly trigger for the same request.
- Add `config.yaml` only for stable repository paths or commands used by the skill.
- Use exact verified pnpm commands; never invent a test command.

## Manual index maintenance

`.claude/docs-index.md` and `.claude/.docs-meta.json` are hand-curated. Audit the repository and update both together. Do not overwrite them with dependency detection because package metadata cannot preserve CSS ordering, theme behavior, client boundaries, writing direction, or release constraints.
