import Image from "next/image";
import { achievements } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Achievements() {
  return (
    <section className="bg-background pb-32 pt-16">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <Reveal>
          <h2 className="max-w-[900px] text-[120px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
            My Achivements
          </h2>
        </Reveal>

        <div className="mt-20">
          {achievements.map((item) => (
            <Reveal key={item.title}>
              <div className="grid grid-cols-[116px_400px_1fr_auto] items-center border-t border-line py-8 last:border-b">
                <p className="text-base text-muted">{item.year}</p>
                <div className="flex gap-2.5">
                  {item.images.map((img) => (
                    <Image
                      key={img}
                      src={img}
                      alt=""
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-cover"
                    />
                  ))}
                </div>
                <h3 className="text-5xl font-semibold uppercase tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="text-base font-medium uppercase text-ink">
                  {item.award}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
