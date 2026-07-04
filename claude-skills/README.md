# Custom Claude Code skills

Seven skills tailored to the Portfix agency workflow. Built for personal use across all projects.

## Install (one command)

From the repo root, on your own machine:

```bash
bash claude-skills/install.sh
```

This copies every skill into `~/.claude/skills/`. Claude Code picks them up live — no restart needed. Verify by typing `/` in Claude Code; the new skills appear in the menu.

## The skills

| Command | What it does | Invoked by |
|---|---|---|
| `/frontend-design` | Portfix design-system guardrails — kills generic AI UI | You or Claude (auto when building UI) |
| `/claude-seo` | SEO + GEO audits for this site and client deliverables | You or Claude |
| `/humanizer` | Strips AI writing tells from any draft, in the Portfix voice | You or Claude |
| `/hyperframes` | Writes an HTML animation and renders it to MP4 | You or Claude |
| `/caveman` | Ultra-terse response mode to cut token usage | You only |
| `/notebooklm` | Answers from your own research library at `~/claude-library/` | You or Claude |
| `/ai-second-brain` | Distills session learnings into a wiki at `~/claude-brain/` | You or Claude |

## Requirements

- `hyperframes` needs `pip install playwright && playwright install chromium` and `ffmpeg` on PATH. Everything else has zero dependencies.

## Editing a skill

Edit the `SKILL.md` in `~/.claude/skills/<name>/` — changes apply live within the session. Keep the `description` rich in trigger words; that's what Claude matches against. Re-run the install script after pulling updates to this folder.
