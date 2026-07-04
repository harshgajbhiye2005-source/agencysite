---
name: ai-second-brain
description: Builds and maintains a Karpathy-style personal wiki distilled from your AI sessions. Use when the user says "save this to my brain", "add to wiki", "what do I know about X", or at the end of a session when asked to capture learnings.
argument-hint: [save | query <topic>]
---

Maintain a permanent, growing wiki of what the user learns across AI sessions at `~/claude-brain/`.

## Structure

```
~/claude-brain/
├── index.md          # map of content: every topic, one line each
└── topics/
    └── <topic>.md    # one evergreen note per topic
```

Each topic note: a title, a 2–3 sentence summary at top, then durable knowledge in the user's own terms — decisions made, things that worked, gotchas, commands, snippets. Wiki-link related topics as `[[topic-name]]`. Date each addition with `### YYYY-MM-DD` sections so the note accretes instead of churning.

## Save mode (default when invoked at end of a session or with "save")

1. Distill the current conversation: what did the user *learn or decide* that stays true beyond today? Skip chit-chat, dead ends (unless the dead end is the lesson), and anything trivially googleable.
2. For each learning, find the existing topic note (Grep `~/claude-brain/topics/`) or create one. Merge into the evergreen summary and add a dated section. Prefer updating over duplicating.
3. Update `index.md`.
4. Report back: topics touched, one line each.

Quality bar (Karpathy-style): notes are written to be re-read cold in a year — self-contained, specific, opinionated. "Use `disable-model-invocation: true` for deploy-like skills so Claude never auto-runs them" beats "learned about skill frontmatter".

## Query mode ("what do I know about X")

Grep the brain, read matching topics, answer from the notes with file citations, and mention related `[[links]]` worth revisiting. If the brain has nothing, say so and offer to research and save.
