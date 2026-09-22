// English site copy. This is the canonical shape — src/i18n/fr.ts must match it.
// Components read from src/i18n via getContent() and should not need touching
// for content edits.

export type Service = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  tag: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  link?: { label: string; href: string };
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const en = {
  site: {
    title: "Firas Jamli — Intelligent Document Processing & Data Extraction Specialist",
    description:
      "Firas Jamli is an IT engineer specialized in Intelligent Document Processing (IDP) and Python development, turning messy PDFs, scans, and forms into clean structured data.",
    // TODO: replace with your real production domain before deploying.
    url: "https://firasjamli.dev",
    ogImage: "/og-image.jpg",
    locale: "en_US",
  },

  person: {
    name: "Firas Jamli",
    legalName: "Jamli Mohamed Firas",
    role: "IT Engineer — Intelligent Document Processing & Python Development",
    tagline: "I turn messy PDFs, scans, and forms into clean structured data.",
    location: "Sousse, Tunisia",
    locationNote: "Available for remote / international freelance work, and open to new roles.",
    languages: ["Arabic (native)", "English (fluent)"],
    email: "firas.dev@gmail.com",
    links: {
      github: "https://github.com/firas122",
      upwork: "https://www.upwork.com/freelancers/~0114e5ec94e78abcbd",
      linkedin: "https://www.linkedin.com/in/firas-jamli-1993b542a/",
    },
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Intelligent Document Processing & Data Extraction Specialist",
    headline: "I turn messy documents into clean, structured data.",
    subhead:
      "IT engineer based in Sousse, Tunisia, focused on document AI, OCR pipelines, and Python automation — for freelance clients and teams that need reliable extraction from PDFs, scans, and forms.",
    ctaPrimary: { label: "Send me a document sample", href: "#contact" },
    ctaSecondary: { label: "Hire me on Upwork" },
  },

  about: {
    heading: "About",
    subheading: "Document AI, from OCR to API.",
    basedInLabel: "Based in",
    languagesLabel: "Languages",
    paragraphs: [
      "I'm an IT engineer specialized in Intelligent Document Processing (IDP) and Python development. My work sits at the intersection of OCR, document AI, and backend engineering: I build the pipelines that take an unstructured PDF, scan, or form and turn it into structured, usable data.",
      "I've worked across the full stack of document automation — from OCR pipelines built on Pytesseract and OpenCV, to production extraction workflows on platforms like Sensible.so, to the FastAPI backends and APIs that serve that data downstream.",
      "Based in Sousse, Tunisia, I work remotely with freelance clients and teams internationally, and I'm open to new roles. Fluent in English and native in Arabic.",
    ],
  },

  services: {
    heading: "Services",
    subheading: "What I can do for your documents.",
    items: [
      {
        title: "Document data extraction",
        description:
          "Extracting structured data from PDFs, scans, forms, and ID documents — built for accuracy on messy, real-world inputs.",
      },
      {
        title: "OCR pipelines",
        description:
          "Custom OCR pipelines in Python using OpenCV and Tesseract, tuned for specific document types and scan quality.",
      },
      {
        title: "Sensible.so implementation & configuration",
        description:
          "Setting up and configuring Sensible.so extraction configs and fingerprints for document types, including automated config generation from sample sets.",
      },
      {
        title: "Custom extraction APIs & automation",
        description:
          "Python and FastAPI backends that wrap extraction logic into reliable, callable APIs and automated workflows.",
      },
    ] as Service[],
  },

  projects: {
    heading: "Projects",
    subheading: "Case studies, not a portfolio grid.",
    problemLabel: "Problem:",
    approachLabel: "Approach:",
    outcomeLabel: "Outcome:",
    items: [
      {
        title: "Sensible.so Fingerprint Config Generator",
        tag: "Tooling",
        problem:
          "Manually building Sensible.so fingerprint configurations for a new document type is slow and repetitive when you have many sample PDFs to account for.",
        approach:
          "Built a tool with Claude Code that auto-generates Sensible fingerprint configurations directly from a set of sample PDFs of a given document type.",
        stack: ["Python", "Sensible.so", "Claude Code"],
        outcome:
          "Turns a folder of sample documents into ready-to-use fingerprint configs, cutting out the manual setup step.",
      },
      {
        title: "Nova Assistant",
        tag: "AI Product",
        problem:
          "Online shoppers in the Tunisian market need a conversational way to find products and get answers without digging through catalogs.",
        approach:
          "Built an AI shopping assistant chatbot: a FastAPI backend powered by Gemini and Supabase, paired with a mobile app built in Expo (React Native).",
        stack: ["FastAPI", "Gemini", "Supabase", "Expo", "React Native"],
        outcome:
          "A working AI shopping assistant with a chat-first mobile experience, purpose-built for the Tunisian market.",
      },
      {
        title: "iSteps",
        tag: "What I'm building",
        problem:
          "Businesses across Tunisia and the MENA region still rely heavily on manual document handling — invoices, forms, ID documents — with little accessible document-AI tooling built for the region.",
        approach:
          "My own document-AI venture, targeting Tunisia and the MENA region with document extraction and automation tooling grounded in the same IDP work I do for clients.",
        stack: ["Python", "Document AI", "OCR"],
        outcome:
          "Early-stage — this is what I'm building right now. No customer claims yet, just the direction.",
      },
    ] as Project[],
  },

  testimonial: {
    eyebrow: "Client feedback",
    heading: "What clients say.",
    quote:
      "Firas is an exemplary project leader who can assist with any technical task you might need help with. We would gladly recommend him for any opening he is interested in.",
    rating: 5,
    ratedOutOf5: (rating: number) => `Rated ${rating} out of 5 stars`,
    source: "Upwork Client",
    verifiedOn: "Verified on Upwork",
    context: "PDF extraction & JSON templating project · 6,500+ hours delivered",
  },

  experience: {
    heading: "Experience",
    subheading: "Where I've built this.",
    items: [
      {
        role: "Intelligent Document Processing Developer",
        company: "Kalepa",
        period: "Mar 2023 (contract ended)",
        description: "Built AI-powered document extraction workflows.",
      },
      {
        role: "Project Manager / Developer",
        company: "Shopium",
        period: "Oct 2021 – Nov 2022 · Full-time",
        description: "Mobile and backend development.",
      },
      {
        role: "AI Developer",
        company: "Freingo",
        period: "Nov 2020 – Sep 2021",
        description: "Built an OCR pipeline for ticket scanning with Pytesseract, OpenCV, and NumPy.",
      },
      {
        role: "AI Developer",
        company: "Pixemantic",
        period: "Aug 2020 – Nov 2020",
        description: "Document detection and data extraction from ID cards and passports.",
      },
    ] as Experience[],
  },

  skills: {
    heading: "Skills",
    subheading: "Tools I actually use.",
    groups: [
      {
        category: "Document AI / OCR",
        items: ["Sensible.so", "Pytesseract", "OpenCV", "OCR pipeline design", "Document classification"],
      },
      {
        category: "Python & Backend",
        items: ["Python", "FastAPI", "NumPy", "REST APIs", "Automation scripting"],
      },
      {
        category: "Mobile",
        items: ["React Native", "Expo"],
      },
      {
        category: "Data / Cloud",
        items: ["Supabase", "Google Gemini API", "Git"],
      },
    ] as SkillGroup[],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Let's talk about your documents",
    body: "Have a PDF, scan, or form you need turned into structured data? Send me a sample and a short description of what you need — I'll tell you honestly whether it's a good fit.",
    hireMeUpwork: "Hire me on Upwork",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "What do you need extracted?",
      messagePlaceholder: "Describe your documents, or drop a link to a sample.",
      submit: "Send message",
      emailDirectPrefix: "Or just email me directly at",
    },
    // TODO: create a Formspree form at https://formspree.io and put its ID here,
    // or set PUBLIC_FORMSPREE_ID as an environment variable at build time.
    formspreeId: "YOUR_FORMSPREE_ID",
  },

  footer: {
    builtWith: (year: number, name: string) => `© ${year} ${name}. Built with Astro & Tailwind.`,
  },

  ui: {
    themeToggle: "Toggle dark mode",
    menuToggle: "Toggle menu",
    contactCta: "Contact",
    portraitAlt: "Portrait of Firas Jamli",
    switchLanguageTo: "Français",
  },
};
