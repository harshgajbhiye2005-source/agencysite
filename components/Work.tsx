"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
          Selected Work
        </p>
        <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
          Projects I&apos;m{" "}
          <em className="font-serif-display font-normal">proud</em> of.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.12}>
            <motion.a href="#contact" whileHover="hover" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <motion.div
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <motion.div
                  variants={{ hover: { opacity: 1, y: 0 } }}
                  initial={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-5 left-5"
                >
                  <span className="rounded-full bg-background/85 px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
                    View project ↗
                  </span>
                </motion.div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-line pb-6">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">
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
