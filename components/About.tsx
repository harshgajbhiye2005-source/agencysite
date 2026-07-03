"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { site, stats } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // ease-out cubic
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            About us
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A small team with big standards.
          </h2>
          <p className="mt-6 text-lg text-muted">
            Placeholder copy — {site.name} is a creative studio based in{" "}
            {site.location}. We partner with founders and teams to design
            brands, websites, and content that actually move the needle.
            Replace this paragraph with the company&apos;s real story.
          </p>
          <p className="mt-4 text-lg text-muted">
            Placeholder copy — every project gets senior attention from day
            one. No handoffs, no bloat, just focused work and honest
            communication.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-surface">
              <div className="flex h-full flex-col justify-center p-8">
                <span className="text-4xl font-bold text-accent sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-sm text-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
