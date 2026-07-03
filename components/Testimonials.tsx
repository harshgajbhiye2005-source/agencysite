"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import Reveal from "@/components/Reveal";

// Shows two testimonials per view; auto-advances one slot at a time.
export default function Testimonials() {
  const [page, setPage] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  const visible = [
    testimonials[page],
    testimonials[(page + 1) % count],
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <Reveal>
          <h2 className="text-[120px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
            Testimonials
          </h2>
        </Reveal>

        <div className="relative mt-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-x-24 gap-y-14"
            >
              {visible.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center gap-6">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold uppercase tracking-[-0.01em] text-ink">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-base text-muted">{item.role}</p>
                    </div>
                  </div>
                  <blockquote className="mt-12 text-[32px] font-semibold uppercase leading-[1.2] tracking-[-0.01em] text-ink">
                    {item.quote}
                  </blockquote>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === page ? "bg-ink" : "bg-[#b3b3b3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
