import Image from "next/image";
import { nav, site } from "@/lib/content";
import RollLink from "@/components/RollLink";

export default function Nav() {
  return (
    <header className="bg-background">
      <div className="relative mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-[70px]">
        <a href="#" className="flex items-center">
          <Image src={site.logo} alt="Logo" width={180} height={38} priority />
        </a>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-12">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-base uppercase text-ink transition-opacity hover:opacity-60"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <RollLink href="#contact">LET&rsquo;S TALK</RollLink>
      </div>
    </header>
  );
}
