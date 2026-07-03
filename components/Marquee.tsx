import Image from "next/image";
import { designMarquee } from "@/lib/content";

// Giant scrolling strip: DESIGN ● SOLUTION ● DEFINE with photo bubbles.
export default function Marquee() {
  const items = [...designMarquee.words, ...designMarquee.words];

  return (
    <section className="overflow-hidden bg-background py-24">
      <div className="marquee-track items-center" style={{ animationDuration: "30s" }}>
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap text-[232px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
              {word}
            </span>
            <Image
              src={designMarquee.images[i % designMarquee.images.length]}
              alt=""
              width={162}
              height={162}
              className="mx-14 h-[162px] w-[162px] rounded-full object-cover"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
