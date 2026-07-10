"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const fields = [
  { label: "Name*", type: "text", placeholder: "Jane Smith", required: true },
  { label: "Email*", type: "email", placeholder: "jane@example.com", required: true },
  { label: "Phone number *", type: "tel", placeholder: "+91", required: true },
  { label: "Where from? *", type: "text", placeholder: "Company / Organization", required: true },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-[95rem] px-5 py-32 sm:px-12">
      <Reveal className="text-center">
        <h2 className="display mx-auto max-w-5xl text-[clamp(2.4rem,8.3vw,7.5rem)]">
          Let&apos;s build
          <br />
          something together
        </h2>
      </Reveal>

      <div className="mt-24 grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          {sent ? (
            <div className="flex min-h-72 items-center justify-center border border-line p-8 text-center">
              <div>
                <p className="display text-2xl">Thanks — request noted!</p>
                <p className="mt-4 text-muted">
                  This is a demo form. Wire it to email or a form service
                  before launch.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="grid gap-12 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {fields.map((field) => (
                <label key={field.label} className="block">
                  <span className="display block text-lg sm:text-xl">
                    {field.label}
                  </span>
                  <input
                    required={field.required}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-5 w-full border-b border-line bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-foreground"
                  />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="display block text-lg sm:text-xl">
                  About your project
                </span>
                <textarea
                  rows={4}
                  placeholder="What you'd like to create..."
                  className="mt-5 w-full resize-none border-b border-line bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-foreground"
                />
              </label>
              <div>
                <button
                  type="submit"
                  className="group bg-foreground px-8 py-5 text-sm font-semibold uppercase tracking-tight text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  [ Send a request ]
                </button>
              </div>
            </form>
          )}
        </Reveal>

        {/* Photo — served from public/portrait.jpg; grayscale keeps the B&W look */}
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-400 grayscale">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/portrait.jpg`}
              alt="Harsh Gajbhiye"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
