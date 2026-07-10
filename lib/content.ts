// ============================================================
// SITE CONTENT — everything the site displays lives here.
// Lines marked TODO still need real details: edit the value,
// push to main, and the live site updates automatically.
// ============================================================

export const site = {
  brand: "Harsh",
  name: "Harsh Gajbhiye",
  role: "Digital Marketing Graduate",
  availability: "Open to opportunities",
  intro:
    "BBA graduate in Digital Marketing from MIT-WPU. I build websites for real clients and bring an athlete's discipline — honed on national and international cricket fields — to everything I do.",
  email: "harsh.gajbhiye2005@gmail.com",
  phone: "+91 95038 72686",
  location: "Nagpur, Maharashtra",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-gajbhiye" },
    { label: "GitHub", href: "https://github.com/harshgajbhiye2005-source" },
  ],
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#services" },
  { label: "About me", href: "#about" },
];

// Shown as the stack of cards in the dark "skills" section.
export const services = [
  {
    title: "Digital Marketing",
    description:
      "BBA in Digital Marketing from MIT-WPU (8/10 GPA) — grounded in strategy, branding, and campaigns that actually reach people.",
    tags: ["Strategy", "Branding", "Social Media", "SEO", "Campaigns"],
  },
  {
    title: "Website Development",
    description:
      "I design and ship websites for real clients — from first brief to live launch, including PS Group and Artistically Yours.",
    tags: ["Client Work", "Responsive", "Design", "Launch", "Maintenance"],
  },
  {
    title: "Client Servicing & Operations",
    description:
      "Two internships across operations and client servicing — keeping projects moving, clients informed, and details handled.",
    tags: ["Communication", "Coordination", "Process", "Delivery", "Follow-through"],
  },
  {
    title: "Athlete's Discipline",
    description:
      "Cricket at the national and international level teaches what no classroom can: consistency, pressure handling, and showing up every day.",
    tags: ["Teamwork", "Consistency", "Pressure", "Leadership", "Work Ethic"],
  },
];

// Featured projects list — title / status / context.
export const projects = [
  { title: "PS Group Website", year: "Completed", client: "Client work" },
  { title: "Artistically Yours", year: "In progress", client: "Client work" },
];

export const whyCards = [
  {
    tag: "Disciplined",
    text: "Trained like an athlete — consistent effort, no shortcuts, every single day.",
    tone: "from-neutral-400 to-neutral-700",
  },
  {
    tag: "Client-first",
    text: "Internships in client servicing taught me to listen first and deliver on time.",
    tone: "from-neutral-500 to-neutral-800",
  },
  {
    tag: "Fast learner",
    text: "New tools, new briefs, new industries — give me a week, not a semester.",
    tone: "from-neutral-300 to-neutral-600",
  },
  {
    tag: "Team player",
    text: "Years of team sport: communicate early, back your teammates, win together.",
    tone: "from-neutral-600 to-neutral-900",
  },
];

// Rendered as [tag | thumbnails | title | detail] rows.
export const achievements = [
  {
    year: "Education",
    title: "BBA, Digital Marketing",
    award: "MIT-WPU · 8/10 GPA",
  },
  {
    year: "Cricket",
    title: "International Level",
    award: "Played internationally",
  },
  {
    year: "Cricket",
    title: "National Level",
    award: "Represented Maharashtra",
  },
  {
    year: "Badminton",
    title: "District Level",
    award: "Competitive player",
  },
  {
    year: "Experience",
    title: "2 Internships",
    award: "Operations · Client Servicing",
  },
];

export const footerColumns = [
  {
    heading: "Quick links",
    links: ["Home", "Projects", "Skills", "About me"],
  },
  {
    heading: "Find me",
    links: ["LinkedIn", "GitHub", "Email", "Resume"],
  },
  {
    heading: "Skills",
    links: [
      "Digital Marketing",
      "Website Development",
      "Client Servicing",
      "Operations",
    ],
  },
];
