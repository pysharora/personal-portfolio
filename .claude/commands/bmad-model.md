---
name: bmad-model
description: Convert confirmed requirements into scalable architecture decisions and a dependency-ordered backlog.
---

# BMAD Model

Require `problem.yaml`; read principles and UX spec when present. Map stories to existing routes, component families, typed data, client boundaries, theme layers, metadata, assets, CI, and deployment. Design the smallest architecture that meets current requirements and document evolution paths for future content sources or integrations.

Record significant decisions with alternatives and trade-offs. Produce small tasks with IDs, priority, type, dependencies, acceptance criteria, verification, and expected file ownership. Present the design for confirmation before saving `.claude/output/architecture.yaml` and `.claude/output/backlog.yaml`. Reject speculative abstractions and dependencies.
