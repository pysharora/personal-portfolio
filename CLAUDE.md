@AGENTS.md

# Personal Portfolio — Claude Entry Point

Read `.claude/docs-index.md` before framework-specific work. It is the curated index for this repository's actual stack, component boundaries, theme system, validation commands, and release flow.

Use the matching resource under `.claude/`:

- `rules/` for file-scoped conventions.
- `skills/` for focused implementation and review workflows.
- `commands/` for explicit repeatable procedures.
- `agents/` for specialized implementation, design-review, and release-review roles.

The exact quality gate is:

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

There is currently no automated test command. Never claim tests passed or invent a test workflow.
