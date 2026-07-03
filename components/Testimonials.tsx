"use client";

import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
            Kind words
          </p>
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
            What clients <em className="font-serif-display font-normal">say</em>
            .
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-background p-8">
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-sm font-medium"
                  >
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
