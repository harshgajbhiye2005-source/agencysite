import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-[2rem] bg-dark px-8 py-16 text-center text-white sm:px-16 sm:py-24">
            <p className="eyebrow">Contact</p>
            <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Whether it&apos;s a marketing role, an internship, or a website
              you need built — I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-dark transition-transform duration-200 hover:scale-[1.04]"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-line-invert px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                {site.phone}
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${site.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line-invert px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Resume ↗
              </a>
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-line-invert px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <p className="mt-10 text-sm text-white/50">
              Based in {site.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
