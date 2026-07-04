---
name: notebooklm
description: Query your personal research library and agency playbooks. Use when the user asks "what does my research/playbook say", references their notes, sources, saved research, or wants an answer grounded in their own documents rather than general knowledge.
argument-hint: [question]
---

Answer questions from the user's own research library, not from general knowledge.

## Library location

`~/claude-library/` — markdown, text, and PDF files organized however the user likes (e.g. `playbooks/`, `research/`, `clients/`). NotebookLM notes, exported docs, meeting notes, and SOPs all live here as files.

If the folder doesn't exist yet, create it, explain the convention in one sentence, and offer to seed it: an agency playbook can start from the services and positioning in `lib/content.ts` if working in the Portfix repo.

## Answering protocol

1. Glob/Grep across `~/claude-library/` for terms from the question (search synonyms too, not just exact words).
2. Read the matching files — whole files when small, relevant sections when large.
3. Answer **only from what the sources say**. Quote key passages. Cite every claim with the file path.
4. If the library doesn't cover it, say so plainly, then (clearly separated) offer what you know generally.
5. For synthesis questions ("what's our pricing approach across playbooks?"), pull from multiple files and note where sources disagree.

## Maintaining the library

When the user says "save this to my library/notes/playbook", write a clean markdown file into the right subfolder with a dated header and a one-line summary at top. Never overwrite an existing note — append or create a new dated file.
