import { marqueeItems } from "@/lib/content";

export default function Marquee() {
  // Track is duplicated so the -50% translate loops seamlessly.
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line py-6">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 whitespace-nowrap text-2xl font-medium tracking-tight text-muted"
          >
            {item}
            <span aria-hidden className="text-foreground/30">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
