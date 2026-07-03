// ============================================================
// Site content — recreated from https://miranda.framer.ai/
// (PORTFIX portfolio template). All components read from here,
// so swapping copy or images for a real client is one edit.
// ============================================================

export const site = {
  name: "Miranda Halim",
  role: "UI & UX Designer",
  logo: "/images/logo.svg",
};

export const nav = [
  { label: "HOME", href: "#" },
  { label: "ABOUT ME", href: "#about" },
  { label: "ALL PAGES", href: "#", dropdown: true },
  { label: "BLOG", href: "#" },
];

export const hero = {
  title: "MIRANDA HALIM",
  label: "UI & UX DESIGNER",
  availability: "AVAILABLE FOR TASK",
  portrait: "/images/portrait.jpg",
  // Small site-screenshot cards that scroll vertically next to the label.
  tiles: ["/images/tile-1.png", "/images/tile-2.png", "/images/tile-3.png"],
  paragraph:
    "I'm a digital designer and web developer crafting visually striking, user-focused experiences that blend aesthetics.",
};

export const capabilityMarquee = ["EXPERTISE", "CAPABILITY", "SERVICES"];

export const capabilities = [
  {
    title: "UI & UX DESIGN",
    description:
      "UI/UX design is about creating digital experiences that are intuitive, engaging, and visually appealing.",
    tags: ["BRANDING", "DESIGN", "WEBSITE", "EXPERIENCE", "UI/UX"],
  },
  {
    title: "LOGO & BRANDING",
    description:
      "Designing user-focused interfaces means crafting digital experiences that feel intuitive and visually appealing.",
    tags: ["MINIMAL", "WEBSITE", "VISUAL", "UI/UX", "USABILITY"],
  },
  {
    title: "DEVELOPER SUPPORT",
    description:
      "Great digital experiences are built through thoughtful design that feels intuitive and visually appealing.",
    tags: ["DESIGN", "VISUAL", "WEBSITE", "EXPERIENCE", "MINIMAL"],
  },
  {
    title: "BRANDING STRATEGY",
    description:
      "Creating meaningful digital experiences requires designs that are intuitive and visually appealing.",
    tags: ["DESIGN", "CUSTOM", "WEBSITE", "EXPERIENCE", "VISUAL"],
  },
];

export const works = [
  { title: "HILLSIDE HARMONY", year: "2025", client: "Zentryx" },
  { title: "ELMSTONE RETREAT", year: "2024", client: "Nexora" },
  { title: "LAKEVIEW BLOOM", year: "2024", client: "Fluxon" },
  { title: "CEDARFIELD COURT", year: "2023", client: "CodeVista" },
];

// Sponsor logo grid: rows of 3 / 4 / 2 boxes.
export const sponsorRows = [
  ["/images/sponsor-1.svg", "/images/sponsor-2.svg", "/images/sponsor-3.svg"],
  [
    "/images/sponsor-4.svg",
    "/images/sponsor-5.svg",
    "/images/sponsor-6.svg",
    "/images/sponsor-7.svg",
  ],
  ["/images/sponsor-8.svg", "/images/sponsor-9.svg"],
];

export const whyCards = [
  {
    tag: "SECURE",
    text: "NO COMPLEX STEPS. JUST SMOOTH, SECURE, AND FAST EXPERIENCES.",
    image: "/images/why-secure.jpg",
  },
  {
    tag: "SMART",
    text: "SMART CHOICES. SIMPLE STEPS. BETTER EXPERIENCES.",
    image: "/images/why-smart.jpg",
  },
  {
    tag: "INSTANT",
    text: "NO COMPLICATED PROCESS. JUST SEAMLESS, FAST EXPERIENCES.",
    image: "/images/why-instant.jpg",
  },
  {
    tag: "GLOBAL",
    text: "WORKS ANYWHERE, ANYTIME—BUILT FOR A CONNECTED WORLD.",
    image: "/images/why-global.png",
  },
];

export const testimonials = [
  {
    name: "RUTH J. OURS",
    role: "CEO",
    avatar: "/images/avatar-ruth.png",
    quote:
      '" WORKING WITH THIS TEAM WAS AN ABSOLUTE PLEASURE. THEY TOOK OUR VISION AND TRANSFORMED IT INTO A DIGITAL EXPERIENCE. "',
  },
  {
    name: "JAMES H. ELLIS",
    role: "CTO",
    avatar: "/images/avatar-james.png",
    quote:
      "“ THE TEAM’S ATTENTION TO DETAIL AND CREATIVITY EXCEEDED OUR EXPECTATIONS. OUR WEBSITE NOW LOOKS STUNNING. ”",
  },
  {
    name: "MICHAEL M. BOWEN",
    role: "CMO",
    avatar: "/images/avatar-michael.jpg",
    quote:
      '" I WAS IMPRESSED BY THEIR ABILITY TO UNDERSTAND OUR BRAND AND TRANSLATE IT INTO A STUNNING WEBSITE. THE PROCESS WAS SMOOTH. "',
  },
];

export const contact = {
  heading: "CRAFTING DIGITAL BRAND STORIES",
  image: "/images/contact.jpg",
};

export const designMarquee = {
  words: ["DESIGN", "SOLUTION", "DEFINE"],
  images: ["/images/marquee-1.png", "/images/marquee-2.png"],
};

export const achievements = [
  {
    year: "2021",
    title: "PRISM",
    award: "BEST WEBSITE DESIGNER",
    images: ["/images/ach-1a.jpg", "/images/ach-1b.jpg", "/images/ach-1c.jpg"],
  },
  {
    year: "2022",
    title: "SQUARE",
    award: "#01 WEB DEVELOPER",
    images: ["/images/ach-2a.png", "/images/ach-2b.png", "/images/ach-2c.png"],
  },
  {
    year: "2024",
    title: "VISICRAFT",
    award: "BEST DESIGNER IN NYC",
    images: ["/images/ach-3a.jpg", "/images/ach-3b.jpg", "/images/ach-3c.jpg"],
  },
  {
    year: "2025",
    title: "VERTEX",
    award: "TOP 10 TOOL DESIGNER",
    images: ["/images/ach-4a.jpg", "/images/ach-4b.jpg", "/images/ach-4c.jpg"],
  },
];

export const footer = {
  socials: ["BEHANCE", "YOUTUBE", "DRIBBBLE", "PINTEREST"],
  nameImage: "/images/footer-name.png",
  thanks: "THANKS FOR VISITING MY CREATIVE PORTFOLIO",
  note: "Thank you for exploring my work. If you have any questions, ideas.",
  columns: [
    { heading: "QUICK LINKS", links: ["HOME", "CONTACT", "BLOG", "404"] },
    {
      heading: "ESSENTIAL",
      links: ["ABOUT ME", "SERVICE", "PORTFOLIO", "LET'S TALK"],
    },
    {
      heading: "SERVICES",
      links: [
        "UI & UX DESIGN",
        "LOGO & BRANDING",
        "DEVELOPER SUPPORT",
        "BRANDING STRATEGY",
      ],
    },
  ],
  contact: {
    phone: "+1 (555) 987-6543",
    email: "SUPPORT@GMAIL.COM",
    socials: ["Instagram", "LinkedIn", "Facebook"],
  },
  copyright: "Copyright & design by @TemplateMunk - 2026",
};
