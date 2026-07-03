"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whyCards } from "@/lib/content";
import Reveal from "@/components/Reveal";

// Cards enter rotated and settle straight, like the original's deck shuffle.
const ENTRY_ROTATION = [0, 0, 14, 10];

export default function WhyChoose() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-grey-bg py-32">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <Reveal>
          <h2 className="mx-auto max-w-[900px] text-center text-[120px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
            Why Choose My Service?
          </h2>
        </Reveal>

        <div className="mt-24 flex justify-between gap-7">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 120, rotate: ENTRY_ROTATION[i] }
              }
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-[395px] w-[317px] flex-col bg-white p-[30px]"
            >
              <span className="self-start rounded-full border border-line px-4 py-2 text-sm font-medium uppercase text-ink">
                {card.tag}
              </span>
              <p className="mt-14 text-2xl font-semibold uppercase leading-[1.2] tracking-[-0.01em] text-ink">
                {card.text}
              </p>
              <Image
                src={card.image}
                alt=""
                width={93}
                height={93}
                className="mt-auto h-[93px] w-[93px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
