---
name: docs-sync
description: Manually audit and synchronize the repository's curated agent documentation
---

Use `.claude/skills/agent-docs-maintenance/SKILL.md`.

## Workflow

1. Inspect `package.json`, the lockfile's resolved top-level versions, application structure, CSS imports, CI workflows, `vercel.json`, README, AGENTS, and existing `.claude/` resources.
2. Compare discovered facts with `.claude/docs-index.md`.
3. Update only stale authoritative content; avoid repeating the same instructions across layers.
4. Update `.claude/.docs-meta.json` in the same change, including the audit date and detected stack.
5. Reconcile skill configs, trigger evals, command references, agent skill lists, and `agent-registry.yaml`.
6. Validate Markdown formatting, JSON, YAML, paths, frontmatter names, and registry references.
7. Run `pnpm format:check`.

Do not replace `docs-index.md` with automatically detected dependencies. Preserve its manual CSS, theme, client-boundary, content, validation, and release knowledge.
