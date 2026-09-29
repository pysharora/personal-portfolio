---
name: ralph-loop
description: Resume interrupted Ralph work from persisted PRD state.
---

# Ralph Loop

Require `.claude/ralph-prd.json`. Re-read the current diff, artifacts, context packs, and reports; never assume the filesystem matches saved state. Revalidate completed stories, resume at the earliest incomplete dependency-safe story, preserve ownership, and follow `/ralph` through final validation. If no state exists, direct the user to `/ralph`.
