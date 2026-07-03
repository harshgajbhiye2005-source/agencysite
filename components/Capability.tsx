"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { capabilities, capabilityMarquee } from "@/lib/content";

// Rest angle for each card once it lands on the stack.
const REST_ROTATION = [0, -16, 12, -8];

function Card({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const count = capabilities.length;
  // Card 0 sits on the stack from the start; the rest fly in one by one.
  const start = index / count;
  const end = (index + 1) / count;
  const y = useTransform(progress, [start, end], [index === 0 ? 0 : 1000, 0]);
  const rotate = useTransform(
    progress,
    [start, end],
    [index === 0 ? 0 : REST_ROTATION[index] * 3, REST_ROTATION[index]],
  );
  const item = capabilities[index];

  return (
    <motion.div
      style={reduceMotion ? { rotate: REST_ROTATION[index] } : { y, rotate }}
      className="absolute flex h-[360px] w-[600px] flex-col bg-white p-10 text-left"
    >
      <h3 className="text-[32px] font-semibold uppercase leading-tight tracking-[-0.02em] text-ink">
        {item.title}
      </h3>
      <p className="mt-auto max-w-[520px] text-base leading-[1.6] text-muted">
        {item.description}
      </p>
      <div className="mt-6 flex flex-nowrap gap-2.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border border-line px-3.5 py-2 text-sm font-medium uppercase text-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Capability() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const marqueeWords = [...capabilityMarquee, ...capabilityMarquee];

  return (
    <section ref={ref} className="relative h-[240vh] bg-[#0d0d0d]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Giant background marquee */}
        <div className="marquee-track absolute" style={{ animationDuration: "60s" }}>
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="mx-16 whitespace-nowrap text-[232px] font-semibold uppercase leading-none tracking-[-0.02em] text-white/25"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Stacked cards */}
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          {capabilities.map((_, i) => (
            <Card key={i} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
