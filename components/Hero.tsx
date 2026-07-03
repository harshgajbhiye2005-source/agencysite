"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import RollLink from "@/components/RollLink";

// Two vertical columns of site-screenshot tiles that scroll in a loop.
function TileMarquee() {
  return (
    <div className="flex h-[202px] w-[300px] gap-0.5 overflow-hidden">
      {[0, 1].map((col) => {
        // Stagger the second column so rows don't repeat side by side.
        const tiles = [...hero.tiles.slice(col), ...hero.tiles.slice(0, col)];
        const loop = [...tiles, ...tiles, ...tiles, ...tiles];
        return (
          <div key={col} className="marquee-y-track gap-0.5">
            {loop.map((tile, i) => (
              <Image
                key={i}
                src={tile}
                alt=""
                width={149}
                height={75}
                className="h-[75px] w-[149px] object-cover"
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-40">
      <div className="relative mx-auto max-w-[1440px] px-[70px]">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="pt-12 text-center text-[166px] font-semibold uppercase leading-none tracking-[-0.04em] text-ink"
        >
          {hero.title}
        </motion.h1>

        <div className="relative mt-12 grid grid-cols-[1fr_420px_1fr] items-end gap-10">
          {/* Left: designer label + scrolling screenshot tiles */}
          <div className="pb-[196px]">
            <p className="mb-7">
              <RollLink>{hero.label}</RollLink>
            </p>
            <TileMarquee />
          </div>

          {/* Center: portrait over a rotated gradient sheet */}
          <div className="relative h-[628px] w-[420px]">
            <motion.div
              aria-hidden
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 11, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(var(--gradient-pink) 0%, var(--gradient-blue) 100%)",
              }}
            />
            <Image
              src={hero.portrait}
              alt={hero.title}
              width={420}
              height={628}
              priority
              className="relative h-full w-full object-cover"
            />
          </div>

          {/* Right: intro + availability */}
          <div className="self-end pb-[52px] pl-20">
            <p className="text-base leading-[1.7] text-ink">
              {hero.paragraph}
            </p>
            <p className="mt-10">
              <RollLink>{hero.availability}</RollLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
