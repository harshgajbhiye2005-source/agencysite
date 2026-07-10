import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <section className="mx-auto max-w-[95rem] px-5 py-32 sm:px-12">
      <Reveal>
        <h2 className="display text-[clamp(2.4rem,8.3vw,7.5rem)]">
          My
          <br />
          Achievements
        </h2>
      </Reveal>

      <div className="mt-20">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <div className="group grid items-center gap-6 border-t border-line py-10 last:border-b sm:grid-cols-[110px_auto_1fr_auto]">
              <span className="text-base text-muted">{item.year}</span>
              {/* Thumbnail placeholders */}
              <div className="flex gap-2">
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    className={`block h-14 w-12 bg-gradient-to-br transition-transform duration-300 group-hover:-translate-y-1 ${
                      n === 0
                        ? "from-neutral-300 to-neutral-500"
                        : n === 1
                          ? "from-neutral-200 to-neutral-400"
                          : "from-neutral-400 to-neutral-600"
                    }`}
                    style={{ transitionDelay: `${n * 60}ms` }}
                  />
                ))}
              </div>
              <h3 className="display text-3xl sm:text-5xl">{item.title}</h3>
              <span className="display text-base sm:text-lg">{item.award}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
