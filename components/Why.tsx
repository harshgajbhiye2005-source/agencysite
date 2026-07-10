"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { whyCards } from "@/lib/content";

export default function Why() {
  const rotations = [0, 0, 0, 6];

  return (
    <section id="about" className="bg-surface py-32">
      <div className="mx-auto max-w-[95rem] px-5 sm:px-12">
        <Reveal className="text-center">
          <h2 className="display mx-auto max-w-4xl text-[clamp(2.4rem,8.3vw,7.5rem)]">
            Why work
            <br />
            with me?
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card, i) => (
            <motion.article
              key={card.tag}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 0, y: -8 }}
              className="flex flex-col justify-between gap-14 bg-white p-8 shadow-[0_16px_48px_rgba(13,13,13,0.08)]"
            >
              <div>
                <span className="inline-block rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
                  {card.tag}
                </span>
                <h6 className="display mt-10 text-xl leading-tight sm:text-2xl">
                  {card.text}
                </h6>
              </div>
              {/* Photo placeholder — swap for a real image */}
              <div className={`h-20 w-20 bg-gradient-to-br ${card.tone}`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
