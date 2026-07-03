"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            Tell us about your project — we usually reply within one business
            day.
          </p>
          <div className="mt-10 space-y-3 text-lg">
            <a
              href={`mailto:${site.email}`}
              className="block w-fit transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="block w-fit transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
            <p className="text-muted">{site.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="flex h-full min-h-64 items-center justify-center rounded-2xl border border-accent/40 bg-surface p-8 text-center">
              <div>
                <p className="text-2xl font-semibold text-accent">
                  Thanks — message noted!
                </p>
                <p className="mt-3 text-muted">
                  This is a demo form. Wire it to email or a form service
                  before launch.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Name</span>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">
                  What do you need?
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about the project..."
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
