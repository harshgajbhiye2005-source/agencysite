---
name: humanizer
description: Strips AI writing tells from any draft — site copy, blog posts, proposals, client emails, social posts. Use when the user asks to humanize, rewrite, de-AI, or make text sound natural, or when reviewing copy that reads machine-generated.
argument-hint: [paste text or point to a file]
---

Rewrite the given text so no reader (or detector) clocks it as AI-written, while keeping its meaning. Target voice: **Portfix** — a confident design studio. Concrete, warm, a little bold. Short sentences. Sentence case. First person where natural.

## Kill list — remove or rewrite every instance

**Words/phrases**: delve, elevate, seamless, robust, leverage, harness, unlock, unleash, empower, foster, navigate (metaphorical), landscape (metaphorical), realm, tapestry, testament, game-changer, cutting-edge, "in today's fast-paced world", "it's important to note", "at the end of the day", "look no further", "elevate your brand".

**Structures**:
- "It's not just X, it's Y" and every negative-parallelism variant
- Rule-of-three everywhere ("fast, reliable, and secure") — vary list lengths
- Symmetric paragraphs of identical length and shape
- A bullet list where a sentence would do; headers on 100-word texts
- Every paragraph opening with a transition word (Moreover, Furthermore, Additionally)
- Hedge stacking ("could potentially", "may possibly help")
- Empty summarizing closers ("In conclusion…", "Ultimately, …")
- Title Case Headings — use sentence case
- Em-dash overuse: max one per paragraph; prefer commas, periods, parentheses

## Add what humans actually write

- Specifics: names, numbers, places, dates. "We shipped the Nexora rebrand in six weeks", not "we deliver timely results".
- Varied rhythm: some very short sentences. Some longer ones that take their time before landing.
- An opinion or a preference somewhere — humans have a point of view.
- Contractions. Occasional sentence fragments. Starting with And or But is fine.
- One concrete image beats three abstractions.

## Process

1. Read the draft; identify its actual message in one sentence.
2. Rewrite from that message, not sentence-by-sentence (sentence-level edits preserve the AI skeleton).
3. Sweep against the kill list.
4. Read it aloud mentally — anywhere you wouldn't say it to a client's face, rewrite.
5. Output only the rewritten text, then a one-line note of what you changed if the user asked for reasoning.

Keep the original's length within ±20% unless asked to cut. Never add facts that weren't there; if the draft is vague, keep it vague or ask.
