// ============================================================
// PLACEHOLDER CONTENT — swap every value here for the client's
// real content. All components read from this single file.
// ============================================================

export const site = {
  name: "Miranda",
  firstName: "Miranda",
  role: "Digital Designer & Art Director",
  tagline:
    "I help ambitious brands stand out through thoughtful design — from identity systems to immersive digital experiences.",
  email: "hello@example.com",
  phone: "+91 00000 00000",
  location: "Mumbai, India",
  availability: "Available for new projects",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "Brand Identity",
  "Web Design",
  "Art Direction",
  "Product Design",
  "Motion",
  "Creative Strategy",
];

export const projects = [
  {
    title: "Lumen Studio",
    category: "Brand Identity",
    year: "2026",
    // Gradient stands in for a project image — replace with real photos later.
    gradient: "from-stone-300 via-amber-100 to-orange-200",
    span: "wide" as const,
  },
  {
    title: "Nova Finance",
    category: "Web Design",
    year: "2025",
    gradient: "from-slate-300 via-sky-100 to-indigo-200",
    span: "narrow" as const,
  },
  {
    title: "Atelier Verde",
    category: "E-commerce",
    year: "2025",
    gradient: "from-emerald-200 via-lime-100 to-stone-200",
    span: "narrow" as const,
  },
  {
    title: "Pulse App",
    category: "Product Design",
    year: "2024",
    gradient: "from-rose-200 via-orange-100 to-amber-200",
    span: "wide" as const,
  },
];

export const services = [
  {
    title: "Brand Identity",
    description:
      "Placeholder copy — logo systems, visual language, and guidelines that make a brand instantly recognizable.",
  },
  {
    title: "Web Design & Development",
    description:
      "Placeholder copy — fast, responsive websites designed to convert visitors and built to last.",
  },
  {
    title: "Art Direction",
    description:
      "Placeholder copy — a consistent creative vision across campaigns, photography, and content.",
  },
  {
    title: "Motion & Interaction",
    description:
      "Placeholder copy — micro-interactions and animation that bring digital products to life.",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 40, suffix: "+", label: "Happy clients" },
  { value: 8, suffix: "", label: "Years of experience" },
  { value: 12, suffix: "", label: "Industry awards" },
];

export const testimonials = [
  {
    quote:
      "Placeholder testimonial — working together was seamless from kickoff to launch. The results spoke for themselves.",
    name: "Client Name",
    role: "CEO, Company One",
  },
  {
    quote:
      "Placeholder testimonial — she understood our brand better than we did and translated it into a site we're proud of.",
    name: "Client Name",
    role: "Founder, Company Two",
  },
  {
    quote:
      "Placeholder testimonial — fast, thoughtful, and genuinely invested in our success. We keep coming back.",
    name: "Client Name",
    role: "Marketing Lead, Company Three",
  },
];
