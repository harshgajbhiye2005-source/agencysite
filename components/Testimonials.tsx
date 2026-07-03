"use client";

import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Kind words
          </p>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            What clients say.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-background p-8">
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
