import Image from "next/image";
import { contact } from "@/lib/content";
import Reveal from "@/components/Reveal";

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-2xl font-semibold uppercase tracking-[-0.01em] text-ink">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-5 w-full border-b border-line bg-transparent pb-3 text-base text-ink outline-none placeholder:text-muted focus:border-ink"
      />
    </label>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-background pb-32 pt-36">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <Reveal>
          <h2 className="mx-auto max-w-[1100px] text-center text-[120px] font-semibold uppercase leading-none tracking-[-0.02em] text-ink">
            {contact.heading}
          </h2>
        </Reveal>

        <div className="mt-28 grid grid-cols-[1fr_500px] gap-24">
          <form className="grid h-max grid-cols-2 gap-x-16 gap-y-16">
            <Field label="Name*" placeholder="Jane Smith" />
            <Field label="Email*" placeholder="jane@framer.com" type="email" />
            <Field label="Phone Number *" placeholder="+44" type="tel" />
            <Field label="Where From? *" placeholder="Company / Organization" />
            <label className="col-span-2 block">
              <span className="text-2xl font-semibold uppercase tracking-[-0.01em] text-ink">
                About Your Project
              </span>
              <textarea
                placeholder="What you'd like to create..."
                rows={4}
                className="mt-5 w-full resize-y border-b border-line bg-transparent pb-3 text-base text-ink outline-none placeholder:text-muted focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="col-span-2 mt-4 h-[52px] w-[200px] bg-ink text-base font-semibold uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-80"
            >
              [ Send a Request ]
            </button>
          </form>

          <Reveal>
            <Image
              src={contact.image}
              alt=""
              width={500}
              height={780}
              className="h-[780px] w-[500px] object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
