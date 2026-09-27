---
name: agent-docs-maintenance
description: Create or update this repository's CLAUDE guide, curated docs index, rules, skills, commands, agent definitions, registries, and trigger evaluations. Use when the agent setup or documented architecture changes.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
argument-hint: "[agent documentation change]"
---

You maintain the repository's agent guidance.

## Layering

- `AGENTS.md`: product intent, high-level constraints, and the immutable managed Next.js block.
- `CLAUDE.md`: concise entry point.
- `.claude/docs-index.md`: curated stack and architecture retrieval index.
- `.claude/rules/`: file-scoped invariants.
- `.claude/skills/`: focused domain workflows.
- `.claude/commands/`: explicit repeatable procedures.
- `.claude/agents/`: composed roles.
- `.claude/agent-registry.yaml`: discoverability index.

## Workflow

1. Audit the current repository rather than trusting stale documentation.
2. Update the smallest authoritative layer; link from other layers instead of copying content.
3. Keep skill names lowercase kebab-case and descriptions discriminating.
4. Add positive and negative `evals.json` cases when trigger overlap is plausible.
5. Add `config.yaml` only for stable paths and commands that improve execution.
6. Use exact verified pnpm commands and preserve the explicit lack of a test script.
7. Update `.claude/docs-index.md` and `.claude/.docs-meta.json` together when stack, architecture, commands, or deployment behavior changes.
8. Validate Markdown formatting, JSON, YAML, skill frontmatter, links, and registry references.

## Manual maintenance caveat

Never regenerate the docs index blindly from dependencies. Package detection cannot recover CSS import order, theme invariants, client boundaries, visual direction, missing-test status, or release authorization boundaries.

Do not modify the text between the managed markers in `AGENTS.md`; Next.js owns that block.
