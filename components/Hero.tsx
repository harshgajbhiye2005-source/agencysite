"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/content";
import RollLink from "@/components/RollLink";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden px-5 pb-24 pt-28 sm:px-12 sm:pt-36">
      <div className="mx-auto max-w-[95rem]">
        {/* Giant name — masked line reveal */}
        <h1 className="display overflow-hidden whitespace-nowrap text-center text-[clamp(2.6rem,11vw,10.4rem)]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
          >
            {site.name}
          </motion.span>
        </h1>

        {/* Three-column composition under the name */}
        <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-8">
          {/* Left: role label + collage placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="order-2 lg:order-1"
          >
            <RollLink label={site.role} href="#services" />
            {/* Collage placeholder — swap for a real work snapshot */}
            <div className="mt-6 grid aspect-[3/2] max-w-xs grid-cols-3 gap-1 bg-neutral-200 p-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${
                    i % 2
                      ? "from-neutral-100 to-neutral-300"
                      : "from-neutral-300 to-neutral-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Center: portrait over rotated pastel shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2"
          >
            <div
              aria-hidden
              className="absolute -inset-x-6 inset-y-10 rotate-[8deg] bg-fuchsia-200"
            />
            <div
              aria-hidden
              className="absolute -inset-x-4 inset-y-16 -rotate-[6deg] bg-indigo-200"
            />
            {/* Portrait — served from public/portrait.jpg; grayscale keeps the B&W look */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-400 grayscale">
              <Image
                src="/portrait.jpg"
                alt={site.name}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right: intro + availability */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="order-3 lg:justify-self-end"
          >
            <p className="max-w-xs text-base leading-relaxed text-foreground">
              {site.intro}
            </p>
            <div className="mt-8">
              <RollLink label={site.availability} href="#contact" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
