@AGENTS.md

# Personal Portfolio — Claude Entry Point

Read `.claude/docs-index.md` before framework-specific work. It is the curated index for this repository's actual stack, component boundaries, theme system, validation commands, and release flow.

## Intent routing

Use the lightest workflow that safely fits:

| Signal                                                                           | Workflow                    |
| -------------------------------------------------------------------------------- | --------------------------- |
| Multi-feature initiative, major redesign, CMS/data layer, or architecture change | `/bmad-run`                 |
| Clear implementation request with multiple independent tasks                     | `/ralph`                    |
| Small, bounded implementation                                                    | `/quick-dev`                |
| Planning without implementation                                                  | `/quick-spec`               |
| Unclear requirements                                                             | `/clarify` or `/bmad-break` |
| UX flow, screens, or interaction design                                          | `/ux-spec`                  |
| Workflow status                                                                  | `/bmad-help`                |

Do not force BMAD ceremony onto a one-file correction. Do not use a quick workflow when a change affects multiple architectural layers or introduces persistence, external integrations, or sensitive user data.

Use the matching resource under `.claude/`:

- `rules/` for file-scoped conventions.
- `skills/` for focused implementation and review workflows.
- `commands/` for explicit repeatable procedures.
- `agents/` for specialized implementation, design-review, and release-review roles.

For substantial work, the scalable path is:

`Principles (optional) -> Break -> Clarify -> UX (when relevant) -> Model -> Analyze -> Checklist -> GSD Prep -> Act/Ralph -> Deliver`

BMAD working artifacts live under `.claude/output/` and are git-ignored. Confirm requirements, architecture, implementation scope, and release actions at their respective gates.

The exact quality gate is:

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

There is currently no automated test command. Never claim tests passed or invent a test workflow.
