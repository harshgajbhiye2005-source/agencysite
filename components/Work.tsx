import Image from "next/image";
import { sponsorRows, works } from "@/lib/content";
import Reveal from "@/components/Reveal";
import RollLink from "@/components/RollLink";

export default function Work() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <Reveal>
          <h2 className="max-w-[900px] text-[120px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
            Featured Works
          </h2>
        </Reveal>

        <div className="mt-10">
          {works.map((work) => (
            <Reveal key={work.title}>
              <a
                href="#"
                className="group grid grid-cols-3 items-center border-t border-line py-7 last:border-b"
              >
                <h3 className="text-[32px] font-semibold uppercase leading-tight tracking-[-0.02em] text-[#555] transition-colors group-hover:text-ink">
                  {work.title}
                </h3>
                <p className="text-center text-base text-ink">{work.year}</p>
                <p className="text-right text-base text-ink">{work.client}</p>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>

        <p className="mt-20 text-center">
          <RollLink>MORE WORKS</RollLink>
        </p>

        {/* Sponsor logo grid on a 4-column rhythm: cols 1-3, 1-4, then 2-3 */}
        <div className="mt-28 flex flex-col gap-[26px]">
          {sponsorRows.map((row, r) => (
            <div
              key={r}
              className={`flex gap-[26px] ${r === 2 ? "justify-center" : "justify-start"}`}
            >
              {row.map((logo) => (
                <div
                  key={logo}
                  className="flex h-[172px] w-[300px] items-center justify-center border border-line"
                >
                  <Image src={logo} alt="Sponsor" width={175} height={30} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
