"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site } from "@/lib/content";

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 160 && !open);
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: hidden ? "-110%" : "0%", opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 sm:px-7 ${
          scrolled || open
            ? "border-line bg-background/75 shadow-[0_8px_32px_rgba(24,22,17,0.06)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {site.name}
          <span aria-hidden className="font-serif-display">
            .
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-105 md:block"
        >
          Let&apos;s talk
        </a>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 rounded bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 rounded bg-foreground"
          />
        </button>
      </div>

      <motion.nav
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, pointerEvents: "auto" as const }
            : { opacity: 0, y: -8, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl border border-line bg-background/95 p-6 backdrop-blur-xl md:hidden"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="py-3 text-lg text-muted transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-3 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
        >
          Let&apos;s talk
        </a>
      </motion.nav>
    </motion.header>
  );
}
