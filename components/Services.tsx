"use client";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
            What I do
          </p>
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
            Services shaped around{" "}
            <em className="font-serif-display font-normal">your</em> goals.
          </h2>
        </Reveal>

        <div className="mt-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group grid gap-4 border-b border-line py-10 transition-colors duration-300 hover:bg-background/50 sm:grid-cols-[80px_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <span className="text-sm text-muted">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
