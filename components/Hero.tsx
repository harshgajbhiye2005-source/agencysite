"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

const lines = ["We design", "brands & websites", "people remember."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-muted"
        >
          {site.name} — Creative Studio
        </motion.p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {i === 2 ? (
                  <>
                    people <em className="not-italic text-accent">remember.</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-md text-lg text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            See our work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
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
