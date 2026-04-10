export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription?: string;
  challenge: string;
  outcome: string;
  stack: string[];
  tags?: string[];
  metrics?: string[];
  image: string;
  accent: string;
  year: string;
  featured?: boolean;
  links: {
    live?: string;
    github?: string;
  };
};

export type Blog = {
  title: string;
  summary: string;
  image: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
};

export type SkillBadge = {
  name: string;
  icon: string;
  description: string;
};

export const siteData = {
  name: "Ajay Chaniya",
  firstName: "Ajay",
  brand: "AJAY CHANIYA",
  role: "Front End Developer",
  email: "ajaychaniya08@gmail.com",
  phone: "+91 90391 17637",
  location: "Bhopal, Madhya Pradesh, India",
  availability: "Open to frontend roles and collaborative product teams",
  siteUrl: "https://ajay-portfolio.dev",
  headline: "Front End Developer crafting responsive, high-performance web applications.",
  intro:
    "I'm Ajay Chaniya, a Front-End Web Developer and graduate. I specialize in building high-performance, interactive web applications using modern technologies.\n\nCurrently, I'm working as a React Intern at LincPay Solution Pvt. Ltd., where I contribute reusable UI components, production bug fixes, performance improvements, and technical documentation. My experience also includes building responsive, standards-based interfaces during training at J-Spider and shipping project work with React, TypeScript, TanStack Query, Shadcn UI, and Tailwind CSS.",
  shortBio:
    "My sweet spot is translating product goals into crisp interfaces, maintainable frontend systems, and experiences that stay fast even as complexity grows.",
  longBio:
    "I'm Ajay Chaniya, a Front-End Web Developer and graduate. I specialize in building high-performance, interactive web applications using modern technologies.\n\nMy sweet spot is translating product goals into crisp interfaces, maintainable frontend systems, and experiences that stay fast even as complexity grows.\n\nMy expertise spans HTML, CSS, JavaScript, and React.js, with a strong foundation in Express.js and RESTful APIs. Beyond code, I apply the same strategic discipline I learned from competitive chess to technical problem solving.",
  metaDescription:
    "Ajay Chaniya is a Front End Developer experienced in React, TypeScript, JavaScript, Tailwind CSS, Shadcn UI, REST APIs, and scalable frontend architecture.",
  profileImage:
    "/Gemini_Generated_Image_4cosyf4cosyf4cos.png",
  heroVisuals: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  ],
  stats: [
    {
      value: "2+",
      label: "Professional frontend roles",
      detail: "Industry internship plus structured frontend development training.",
    },
    {
      value: "2",
      label: "Resume-ready product projects",
      detail: "Healthcare and e-commerce applications built with modern frontend tooling.",
    },
    {
      value: "40%",
      label: "API call reduction achieved",
      detail: "Reduced redundant requests in project work through TanStack Query optimization.",
    },
  ] satisfies Stat[],
  highlights: [
    "Responsive, mobile-first interfaces built with modern React and JavaScript standards.",
    "Reusable UI components that accelerate delivery and improve maintainability.",
    "Performance-focused frontend work with cleaner server-state and API integration.",
  ],
  aboutSkills: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
} as const;

export const services = [
  {
    title: "Reusable UI Development",
    copy: "Building scalable React components and frontend systems that support faster product delivery.",
  },
  {
    title: "API-Driven Interfaces",
    copy: "Integrating RESTful APIs, server-state management, and frontend data flows with clean structure.",
  },
  {
    title: "Responsive Web Apps",
    copy: "Creating accessible, responsive web applications with modern styling, performance focus, and maintainable code.",
  },
];

export const techStack = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Shadcn UI",
  "TanStack Query",
  "REST APIs",
  "Context API",
  "MongoDB",
  "SQL / MySQL",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
];

export const featuredSkills: SkillBadge[] = [
  {
    name: "React.js",
    icon: "Re",
    description: "Building reusable UI components and production-ready interfaces with modern React patterns.",
  },
  {
    name: "TypeScript",
    icon: "Ts",
    description: "Improving maintainability and frontend reliability with stronger typing and cleaner architecture.",
  },
  {
    name: "Tailwind CSS",
    icon: "Tw",
    description: "Shipping fast, responsive layouts with utility-first styling and consistent UI implementation.",
  },
  {
    name: "REST APIs",
    icon: "API",
    description: "Integrating external data and server-state cleanly across interactive frontend applications.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Core frontend stack used to build responsive, maintainable, and production-ready interfaces.",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    description: "Working with APIs and data handling patterns that improve app performance and frontend structure.",
    items: ["TanStack Query", "RESTful APIs", "Context API", "Server State", "Data Fetching"],
  },
  {
    title: "Backend & Tools",
    description: "Supporting tools and backend familiarity used across full product development workflows.",
    items: ["MongoDB", "SQL / MySQL", "Git", "GitHub", "Postman", "Vercel"],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Sep 2025 - Present",
    role: "React Intern",
    company: "LincPay Solution Pvt. Ltd.",
    summary:
      "Contributing to production-level React applications by building reusable UI, fixing bugs, and improving delivery quality across frontend workflows.",
    achievements: [
      "Developing reusable UI components using React and TypeScript to accelerate feature delivery.",
      "Collaborating on bug fixes and performance optimizations in production-level React applications.",
      "Implementing unit tests to ensure code reliability and maintaining technical documentation.",
    ],
  },
  {
    period: "July 2024 - Mar 2025",
    role: "Trainee",
    company: "J-Spider Training & Development Center",
    summary:
      "Strengthened frontend foundations through practical training focused on JavaScript, DOM manipulation, responsive UI, and clean ES6 code structure.",
    achievements: [
      "Built responsive, mobile-first interfaces using asynchronous JavaScript and DOM manipulation.",
      "Modularized codebases using ES6 standards to improve maintainability across multi-page projects.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "procurelinc",
    title: "Procurelinc e-Procurement Solution",
    category: "B2B SaaS / Fintech",
    tagline:
      "A secure and scalable e-procurement platform for government and enterprise tendering workflows.",
    description:
      "Contributed to UI enhancements, bug resolution, and feature improvements for a large-scale procurement platform used by Government and PSU departments.",
    longDescription:
      "Worked on improving the frontend experience of a complex e-procurement system by refining UI components, fixing critical bugs, and implementing new features. Focused on enhancing usability across tendering workflows, ensuring consistency in design, and improving overall interaction quality. Collaborated within an existing codebase to deliver stable updates while maintaining platform reliability and performance.",
    challenge:
      "Improve an existing e-procurement frontend while keeping tendering workflows stable, usable, and consistent for enterprise users.",
    outcome:
      "Delivered UI refinements, resolved production issues, and improved the overall user workflow across a large-scale procurement platform.",
    stack: ["React", "TypeScript", "Frontend Development", "Tailwind CSS"],
    tags: ["Frontend Development", "UI Enhancements", "Bug Fixing", "Feature Implementation"],
    metrics: ["Improved UI consistency", "Resolved production issues", "Enhanced user workflows"],
    image: "https://vault-vogue-server.vercel.app/images/procurelinc-preview.png",
    accent: "emerald",
    year: "2026",
    featured: true,
    links: {
      live: "https://dev.procurelinc.in/",
    },
  },
  {
    slug: "psych-up",
    title: "Psych-Up",
    category: "Healthcare Management Platform",
    tagline: "A multi-role healthcare platform designed for secure workflows and scalable frontend architecture.",
    description:
      "Psych-Up is a healthcare management platform featuring five distinct modules for patients, therapists, organizations, org-users, and super admins.",
    challenge:
      "Build a large healthcare product that keeps multiple user roles, secure access boundaries, and data-heavy interactions manageable and intuitive.",
    outcome:
      "Delivered an accessible and consistent UI with TanStack Query-based server-state improvements that reduced redundant API calls by 40%.",
    stack: ["React", "TypeScript", "TanStack Query", "Shadcn UI", "Tailwind CSS"],
    image:
      "https://vault-vogue-server.vercel.app/images/psychup.png",
    accent: "cyan",
    year: "2026",
    links: {
      live: "https://dev.psychup.health",
    },
  },
  {
    slug: "vogue-vault",
    title: "Vogue Vault",
    category: "E-Commerce Application",
    tagline: "A modern e-commerce storefront focused on filtering, cart interactions, and responsive browsing.",
    description:
      "Vogue Vault is a frontend e-commerce application built to deliver smooth browsing, product filtering, and a clean shopping experience.",
    challenge:
      "Create a responsive storefront experience that keeps catalog browsing and cart interactions simple and intuitive.",
    outcome:
      "Built a modern shopping interface with responsive design patterns and cleaner product exploration flows.",
    stack: ["React", "JavaScript", "CSS"],
    image:
      "https://vault-vogue-server.vercel.app/images/e-com.png",
    accent: "amber",
    year: "2025",
    links: {
      live: "https://vault-vogue-lite.vercel.app/",
    },
  },
];

export const blogs: Blog[] = [
  {
    title: "Building smoother landing pages with motion and hierarchy",
    summary:
      "A practical look at how spacing, typography, and restrained animation can make a portfolio feel much more premium.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "How I approach responsive UI without losing visual quality",
    summary:
      "A frontend workflow for maintaining consistency across mobile, tablet, and desktop without sacrificing the feel of the design.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designing developer portfolios that feel custom, not cloned",
    summary:
      "Why hierarchy, copy, and presentation matter if you want a portfolio that feels more trustworthy and memorable.",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
  },
];

export const contactLinks: SocialLink[] = [
  { label: "Email", value: siteData.email, href: `mailto:${siteData.email}` },
  { label: "Phone", value: siteData.phone, href: `tel:${siteData.phone.replace(/\s+/g, "")}` },
  {
    label: "Location",
    value: siteData.location,
    href: "https://maps.google.com/?q=Bhopal,Madhya%20Pradesh,India",
  },
];

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
