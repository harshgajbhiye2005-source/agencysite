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
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">
            Contact
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
            Let&apos;s make something{" "}
            <em className="font-serif-display font-normal">great</em> together.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Tell me about your project — I usually reply within one business
            day.
          </p>
          <div className="mt-10 space-y-3 text-lg">
            <a
              href={`mailto:${site.email}`}
              className="block w-fit underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="block w-fit underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {site.phone}
            </a>
            <p className="text-muted">{site.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="flex h-full min-h-64 items-center justify-center rounded-3xl border border-line bg-surface p-8 text-center">
              <div>
                <p className="text-2xl font-medium">Thanks — message noted!</p>
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
                    className="w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-foreground"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-foreground"
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
                  placeholder="Tell me about the project..."
                  className="w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-foreground"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
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
