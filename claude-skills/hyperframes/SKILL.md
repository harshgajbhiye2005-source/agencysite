---
name: hyperframes
description: Write HTML, render video. Creates motion graphics, animated intros, product promos, and social clips by coding a self-contained HTML animation and rendering it to MP4 frame-by-frame. Use when the user asks for a video, animation clip, motion graphic, or animated banner.
argument-hint: [what to animate] [duration] [size]
allowed-tools: Bash(python3 *), Bash(ffmpeg *), Bash(pip *)
---

Produce videos by writing an HTML animation, then rendering it deterministically with the bundled script.

## The contract

Write a single self-contained HTML file (inline CSS/JS, no external requests) that exposes:

```js
window.seek = (tMs) => { /* draw the exact visual state for time tMs */ };
window.DURATION_MS = 5000; // total length
```

Drive everything from `seek(t)` — position, opacity, text, canvas draws. Never rely on CSS animations, `requestAnimationFrame`, or wall-clock time: rendering is frame-stepped, so state must be a pure function of `t`. Easing helper worth inlining: `const ease = x => 1 - Math.pow(1 - x, 4);` (matches the site's motion feel).

Default aesthetic (unless told otherwise): Portfix monochrome — white background, #0d0d0d type, Inter/system sans, uppercase display headlines with tight letter-spacing, flat pastel accent blocks, masked line reveals.

## Render

```bash
python3 ${CLAUDE_SKILL_DIR}/scripts/render.py animation.html out.mp4 --fps 30 --width 1920 --height 1080
```

The script screenshots each frame via Playwright Chromium and assembles with ffmpeg. Requirements: `pip install playwright` (+ browsers) and ffmpeg on PATH — if missing, tell the user the exact install commands rather than silently failing. Sizes: 1920x1080 (YouTube/web), 1080x1920 (Reels/Shorts), 1080x1080 (square).

## Workflow

1. Clarify only if essential (text content, duration, aspect); otherwise pick sensible defaults and state them.
2. Write the HTML to the working directory; keep it under ~300 lines.
3. Render a low-cost preview first (`--fps 10`, small size), send it to the user, then render full quality after approval or if the user is away.
4. Send the final MP4 with SendUserFile.
