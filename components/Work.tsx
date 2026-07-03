"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Selected Work
        </p>
        <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
          Projects we&apos;re proud of.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.12}>
            <motion.a
              href="#contact"
              whileHover="hover"
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-background/60 px-4 py-2 text-xs uppercase tracking-widest opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    View project →
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.category}</p>
                </div>
                <span className="text-sm text-muted">{project.year}</span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
