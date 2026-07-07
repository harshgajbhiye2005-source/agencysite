// ============================================================
// PLACEHOLDER CONTENT — swap every value here for the client's
// real content. All components read from this single file.
// ============================================================

export const site = {
  brand: "Portfix",
  name: "Miranda Halim",
  role: "UI & UX Designer",
  availability: "Available for task",
  intro:
    "I'm a digital designer and web developer crafting bold, user-focused experiences where aesthetics and usability meet.",
  email: "hello@example.com",
  phone: "+91 00000 00000",
  location: "Mumbai, India",
  socials: [
    { label: "Behance", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
};

// Everything search engines see is generated from this block (page title,
// meta description, Open Graph tags, sitemap.xml, robots.txt, JSON-LD).
export const seo = {
  // The live URL of the deployed site, no trailing slash — e.g.
  // "https://agencysite.netlify.app" or "https://youragency.com".
  url: "https://example.com",
  // Shown as the clickable headline in Google results (~60 chars max).
  title: `${site.name} — ${site.role}`,
  // Shown under the headline in Google results (~155 chars max). Include
  // the terms clients actually search for, e.g. "web design agency in Nagpur".
  description: site.intro,
  keywords: [
    "web design agency",
    "UI UX design",
    "website development",
    "branding",
  ],
  // City for the LocalBusiness listing — keep in sync with site.location.
  city: "Mumbai",
  country: "IN",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Service", href: "#services" },
  { label: "About me", href: "#about" },
];

export const services = [
  {
    title: "UI & UX Design",
    description:
      "Interfaces that feel effortless — research-driven flows, wireframes, and polished screens people enjoy using.",
    tags: ["Minimal", "Website", "Visual", "UI/UX", "Usability"],
  },
  {
    title: "Logo & Branding",
    description:
      "Identity systems with real presence: logo, type, and color working together so the brand is recognized at a glance.",
    tags: ["Identity", "Logo", "Guidelines", "Print", "Digital"],
  },
  {
    title: "Developer Support",
    description:
      "Design that ships. Clean handoffs, tokens, and close collaboration with engineers from first commit to launch.",
    tags: ["Handoff", "Tokens", "QA", "Systems", "Launch"],
  },
  {
    title: "Branding Strategy",
    description:
      "Positioning and messaging grounded in research, so every touchpoint tells one clear, convincing story.",
    tags: ["Research", "Positioning", "Voice", "Story", "Growth"],
  },
];

export const projects = [
  { title: "Hillside Harmony", year: "2025", client: "Zentryx" },
  { title: "Elmstone Retreat", year: "2024", client: "Nexora" },
  { title: "Lakeview Bloom", year: "2024", client: "Fluxon" },
  { title: "Cedarfield Court", year: "2023", client: "CodeVista" },
];

// Text wordmarks stand in for client logos — swap for real SVGs later.
export const clientLogos = [
  "Logoipsum",
  "Brandmark",
  "Nimbus",
  "Vertex",
  "Halcyon",
  "Orbita",
  "Kindred",
  "Monolith",
  "Atlas",
];

export const whyCards = [
  {
    tag: "Secure",
    text: "No complex steps — just smooth, secure and fast experiences.",
    tone: "from-neutral-400 to-neutral-700",
  },
  {
    tag: "Smart",
    text: "Smart choices and simple steps that lead to better products.",
    tone: "from-neutral-500 to-neutral-800",
  },
  {
    tag: "Instant",
    text: "No complicated process — seamless delivery from day one.",
    tone: "from-neutral-300 to-neutral-600",
  },
  {
    tag: "Global",
    text: "Works anywhere, anytime — built for a connected world.",
    tone: "from-neutral-600 to-neutral-900",
  },
];

export const testimonials = [
  {
    quote:
      "Working together was a genuine pleasure — our vision became a digital experience beyond what we imagined.",
    name: "Client Name",
    role: "CEO",
  },
  {
    quote:
      "Remarkable attention to detail and creativity. Our website finally looks the way our brand deserves.",
    name: "Client Name",
    role: "CTO",
  },
  {
    quote:
      "They understood our brand instantly and turned it into a site that wins us clients every week.",
    name: "Client Name",
    role: "Founder",
  },
  {
    quote:
      "Fast, thoughtful, and invested in our success from kickoff to launch. We keep coming back.",
    name: "Client Name",
    role: "Marketing Lead",
  },
];

export const achievements = [
  { year: "2021", title: "Prism", award: "Best Website Designer" },
  { year: "2022", title: "Square", award: "Site of the Month" },
  { year: "2024", title: "VisiCraft", award: "Excellence in Interaction" },
];

export const footerColumns = [
  {
    heading: "Quick links",
    links: ["Home", "Contact", "Blog", "404"],
  },
  {
    heading: "Essential",
    links: ["About me", "Service", "Portfolio", "Let's talk"],
  },
  {
    heading: "Services",
    links: [
      "UI & UX Design",
      "Logo & Branding",
      "Developer Support",
      "Branding Strategy",
    ],
  },
];
