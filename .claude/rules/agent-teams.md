# Agent teams

- Use teams only for two or more genuinely independent tasks; keep a focused change with one implementer.
- The lead owns requirements, dependency ordering, shared contracts, task assignment, acceptance validation, and integration.
- Every teammate receives a bounded context pack containing the story's WHY, acceptance criteria, relevant code patterns, contracts, exact file ownership, dependencies, and verification.
- Teammates inspect analogous code and submit a plan before editing.
- No two teammates modify the same file in one round. The lead lands shared contracts before parallel work starts.
- Runtime dependencies belong in later rounds even when type contracts can be defined together.
- The lead verifies diffs and acceptance criteria instead of trusting completion claims.
- Failed validation creates focused feedback and rework for the same story.
- Branches, commits, pushes, merges, tags, deployments, and publication require explicit user authorization.
