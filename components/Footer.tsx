import Image from "next/image";
import { footer } from "@/lib/content";
import RollLink from "@/components/RollLink";

function SocialIcon({ name }: { name: string }) {
  // Minimal glyphs for Instagram / LinkedIn / Facebook.
  if (name === "Instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.1h4.56V23H.22zM8.34 8.1h4.37v2.03h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-7.24c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V23H8.34z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.92 3.79-3.92 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.57v1.9h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-24 text-white">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        {/* Social row + back to top */}
        <div className="flex items-center justify-between">
          <ul className="flex gap-16">
            {footer.socials.map((social) => (
              <li key={social}>
                <a
                  href="#"
                  className="text-base font-semibold uppercase transition-opacity hover:opacity-60"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-label="Back to top"
            className="flex h-[60px] w-[60px] items-center justify-center bg-white/10 transition-colors hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M10 17V3M10 3L4 9M10 3l6 6" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </a>
        </div>

        <div className="mt-12 border-t border-line-dark pt-14">
          <Image
            src={footer.nameImage}
            alt="Miranda Halim"
            width={1300}
            height={123}
            className="w-full"
          />
        </div>

        <div className="mt-14 grid grid-cols-[420px_repeat(3,1fr)_auto] gap-12 border-t border-line-dark pt-24">
          <div>
            <h3 className="text-5xl font-semibold uppercase leading-[1.15] tracking-[-0.02em]">
              {footer.thanks}
            </h3>
            <p className="mt-8 max-w-[300px] text-base leading-[1.7] text-white/70">
              {footer.note}
            </p>
            <p className="mt-14">
              <RollLink href="#contact">GET IN TOUCH</RollLink>
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-base font-semibold uppercase">
                {column.heading}
              </h4>
              <ul className="mt-10 space-y-5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="whitespace-nowrap text-base uppercase text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-base font-semibold uppercase">Contact</h4>
            <ul className="mt-10 space-y-5">
              <li className="text-base uppercase text-white/70">
                {footer.contact.phone}
              </li>
              <li className="text-base uppercase text-white/70">
                {footer.contact.email}
              </li>
            </ul>
            <ul className="mt-8 space-y-4">
              {footer.contact.socials.map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-base text-white/90 transition-opacity hover:opacity-60"
                  >
                    <span className="flex h-10 w-10 items-center justify-center bg-white/10">
                      <SocialIcon name={social} />
                    </span>
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-line-dark py-8 text-center text-base text-white/70">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
