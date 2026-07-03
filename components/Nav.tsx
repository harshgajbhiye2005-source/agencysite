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
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Start a project
          </a>
        </nav>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-1 border-b border-line px-6 pb-6 md:hidden"
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
        </motion.nav>
      )}
    </motion.header>
  );
}
