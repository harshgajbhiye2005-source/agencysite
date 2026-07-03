"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Soft ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(24,22,17,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-4xl">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-line bg-background/80 px-4 py-2 text-sm text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {site.availability}
        </motion.div>

        <h1 className="text-5xl font-medium leading-[1.06] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
          {/* Line 1 — mask reveal */}
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease }}
            >
              Design that makes
            </motion.span>
          </span>
          {/* Line 2 — serif italic accent */}
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.45, ease }}
            >
              brands{" "}
              <em className="font-serif-display font-normal">unforgettable</em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-background/60 px-8 py-4 text-sm font-medium backdrop-blur transition-colors duration-300 hover:border-foreground"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 text-sm uppercase tracking-[0.25em] text-muted"
        >
          {site.role} — {site.location}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-muted"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="inline-block"
        >
          Scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
