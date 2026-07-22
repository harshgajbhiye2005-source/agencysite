"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const firstName = site.name.split(" ")[0];

  return (
    <section id="top" className="overflow-hidden px-5 pb-24 pt-32 sm:px-10 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: intro */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {site.availability} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="display mt-7 text-5xl sm:text-6xl lg:text-[4.4rem]"
          >
            Hi, I&apos;m {firstName} —<br />
            <span className="text-accent italic">{site.role.toLowerCase()}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.04]"
            >
              Email me
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${site.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.04]"
            >
              Resume ↗
            </a>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-foreground"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-accent-soft"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-line">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/portrait.jpg`}
              alt={site.name}
              fill
              priority
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
