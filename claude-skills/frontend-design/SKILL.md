---
name: frontend-design
description: Portfix design-system guardrails that kill generic "AI-looking" UI. Use whenever creating or editing pages, sections, or components, restyling anything, or when the user asks for new UI, a redesign, a landing page, or says something looks bland or generic.
---

You are building UI for **Portfix** — a bold, editorial, monochrome portfolio/agency site (Next.js App Router, Tailwind v4, Framer Motion). Everything you produce must look art-directed, not template-generated.

## Design tokens (already defined — never invent new ones)

- Colors: `--background #ffffff`, `--foreground #0d0d0d`, `--muted #555`, `--surface #f0f0f0`, `--dark #0d0d0d`, hairlines `--line rgba(13,13,13,.12)` / `--line-invert rgba(255,255,255,.16)`. Use via Tailwind classes (`text-foreground`, `bg-surface`, `border-line`).
- The palette is monochrome. Color appears only as flat pastel accent blocks (e.g. `bg-fuchsia-200`, `bg-indigo-200`) rotated a few degrees behind imagery — never as gradients on text or buttons.
- Font: Inter only (`--font-inter`), weights 400/600/700/900.

## Typography

- Big statements use the `.display` class: uppercase, weight 600, `letter-spacing -0.04em`, `line-height 1`.
- Hero-scale type uses fluid clamp sizing, e.g. `text-[clamp(2.6rem,11vw,10.4rem)]`.
- Body text: `text-base leading-relaxed`, constrained with `max-w-xs`/`max-w-md` — never full-width paragraphs.
- Labels/tags: `text-xs font-semibold uppercase tracking-widest`.

## Layout

- Page shell: `mx-auto max-w-[95rem]`, section padding `px-5 sm:px-12`, generous vertical rhythm (`pb-24 pt-28` scale).
- Compose asymmetric editorial grids (`lg:grid-cols-[1fr_1.1fr_1fr]`, `items-end`), not centered symmetric card rows.
- Separate with 1px hairlines (`border-line`) and flat `bg-surface` panels — no drop shadows, no glassmorphism, no rounded-2xl cards.
- Imagery is grayscale (`grayscale`) placed over rotated pastel blocks.

## Motion

- Easing is always `[0.22, 1, 0.36, 1]`, durations 0.7–1.1s, staggered delays.
- Scroll reveals: reuse `components/Reveal.tsx` (whileInView, once, `-80px` margin). Masked line reveals for headlines (`overflow-hidden` + `y: "105%" → "0%"`).
- Hover links: reuse `components/RollLink.tsx`. Marquees: `.marquee-track` with duplicated content.
- Every animation must respect `useReducedMotion()` / `prefers-reduced-motion`.

## Content

- All copy lives in `lib/content.ts` — components read from it, never hardcode strings. Add new content there first.

## Anti-generic checklist (reject your own work if any of these appear)

- Purple/blue gradients, gradient text, glassmorphism, `shadow-lg` card grids
- Emoji as icons; generic three-column "features" sections with centered icons
- `rounded-xl` everything; default Tailwind blue/indigo as brand color
- Symmetric hero with centered heading + subheading + two buttons
- Stock phrases in copy ("Elevate your business", "Unlock potential")

When asked for a new section, first study the closest existing component in `components/` and match its idioms exactly. Check `node_modules/next/dist/docs/` for current Next.js APIs before writing code — this repo runs a version with breaking changes.
