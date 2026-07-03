"use client";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            What we do
          </p>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            Services built around your goals.
          </h2>
        </Reveal>

        <div className="mt-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group grid gap-4 border-b border-line py-10 transition-colors hover:bg-background/40 sm:grid-cols-[80px_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <span className="text-sm font-mono text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
