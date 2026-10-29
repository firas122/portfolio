// English site copy. This is the canonical shape — src/i18n/fr.ts must match it.
// Components read from src/i18n via getContent() and should not need touching
// for content edits.

export type Service = {
  title: string;
  description: string;
};

// A measured result from a project: the figure, and what it counts. Shown as
// tabular digits so a row of them lines up. Optional — a project with nothing
// honestly measured shows none rather than an invented one.
export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  /** "demo" gets the filled treatment; everything else is a quiet text link. */
  kind?: "demo" | "repo" | "case";
};

export type Project = {
  title: string;
  tag: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  /** Headline project: given the full-width record at the top of the section. */
  featured?: boolean;
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  /** Said plainly when there is no public link, instead of a dead button. */
  linkNote?: string;
  link?: { label: string; href: string };
};

export type OpenSourceItem = {
  title: string;
  /** Who wrote the project. Shown beside the title, never hidden. */
  upstream: string;
  tag: string;
  summary: string;
  contribution: string;
  stack: string[];
  links?: ProjectLink[];
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
    url: "https://portfolio-firas-jamli.vercel.app",
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
    email: "firas.jamli.dev@gmail.com",
    links: {
      github: "https://github.com/firas122",
      upwork: "https://www.upwork.com/freelancers/~0114e5ec94e78abcbd",
      linkedin: "https://www.linkedin.com/in/firas-jamli-1993b542a/",
    },
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Open source", href: "#open-source" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    greeting: "Hello, I'm",
    availability: "Available for work",
    scrollCue: "Scroll",
    eyebrow: "Intelligent Document Processing & Data Extraction Specialist",
    headline: "I turn messy documents into clean, structured data.",
    subhead:
      "IT engineer based in Sousse, Tunisia, focused on document AI, OCR pipelines, and Python automation — for freelance clients and teams that need reliable extraction from PDFs, scans, and forms.",
    ctaPrimary: { label: "Send me a document sample", href: "#contact" },
    ctaSecondary: { label: "Hire me on Upwork" },
  },

  proof: {
    items: [
      { value: "99%", label: "receipt amount fields extracted correctly" },
      { value: "1,519", label: "automated tests across shipped projects" },
      { value: "4", label: "document formats parsed end to end" },
      { value: "2", label: "languages shipped in every interface" },
    ],
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
        title: "Kvitto — receipt extraction that corrects itself",
        tag: "Document AI",
        featured: true,
        problem:
          "OCR on a photographed till receipt will misread digits — thermal paper fades, curls and catches glare. Most extractors hand back whatever they read and leave you to discover the bad figure later, which for accounting is worse than failing outright.",
        approach:
          "A Swedish receipt is over-determined: the line items, the VAT table and the payment lines all describe the same purchase. I built an arithmetic core that exploits that redundancy — eight reconciliation checks, then a constrained repair search that finds which single digit was misread. It reports ambiguity instead of guessing when the evidence is thin. On top sits a four-route OCR pass (RapidOCR and Tesseract, each on the photo and on a rectified copy) with the reconciler arbitrating between readings, served over FastAPI to a React Native app.",
        stack: ["Python", "FastAPI", "RapidOCR", "Tesseract", "OpenCV", "React Native", "Expo"],
        outcome:
          "99% of printed amounts correct across 26 hand-transcribed real receipts — and every amount the engines could read is now placed on the right line, which means the remaining loss is optical, not structural.",
        metrics: [
          { value: "99%", label: "amount fields correct (556/562)" },
          { value: "244/244", label: "read amounts placed correctly" },
          { value: "1,519", label: "automated tests, CI green" },
        ],
        linkNote:
          "Private repository — it handles real receipts. Happy to walk through the architecture or demo it live.",
      },
      {
        title: "DBShow — a schema you can see, and a linter that reads it back",
        tag: "Developer Tool",
        problem:
          "A database schema is a graph nobody can actually see, and the relationship defects that hurt — a foreign key pointing at nothing, a type mismatch, a missing index, a circular dependency with no valid insert order — are invisible in a DDL dump.",
        approach:
          "Parses SQL DDL, SQLite files or JSON entirely in the browser into one schema model, draws it as an interactive 3D graph, then lints the relationships and explains each finding in plain English with copyable fix DDL. It can also diff two versions of a schema to show exactly what a migration changed. The WebGL layer is hand-tuned — text renders as a canvas texture so a table stays one draw call.",
        stack: ["Next.js", "TypeScript", "React Three Fiber", "sql.js", "WebGL", "Tailwind"],
        outcome:
          "Seven linter rules over four input formats, bilingual EN/FR, and schemas never leave the browser. The one piece of server code — a URL loader — is hardened against SSRF with connect-time DNS validation.",
        metrics: [
          { value: "4", label: "input formats parsed" },
          { value: "7", label: "relationship defects detected" },
          { value: "0", label: "schemas uploaded anywhere" },
        ],
        links: [
          { label: "Live demo", href: "https://dbshow.vercel.app", kind: "demo" },
          { label: "Source", href: "https://github.com/firas122/DBshow", kind: "repo" },
        ],
      },
      {
        title: "Retrieval study — what actually improves RAG",
        tag: "Research",
        problem:
          "RAG advice is mostly asserted, not measured. Before putting retrieval in front of a client's documents I wanted to know which stages earn their cost on a small, real corpus.",
        approach:
          "Built five retrieval systems over the same 15 receipts — naive vectors, then hybrid BM25 + vectors fused with reciprocal rank fusion and a cross-encoder reranker, then LLM query rewriting, then parent-child retrieval, then a tool-calling agent — and scored each on 85 questions written after the earlier stages were frozen, with bootstrap confidence intervals and paired comparisons.",
        stack: ["Python", "ChromaDB", "BM25", "Cross-encoder", "SQLite", "Evaluation"],
        outcome:
          "Hybrid search plus reranking roughly doubled hit@3 on unseen questions (0.39 → 0.71); LLM query rewriting added almost nothing except on follow-up questions, where it is structurally required. The agent answered 25/25 aggregate questions with every figure checked against a tool result.",
        metrics: [
          { value: "+82%", label: "hit@3 from hybrid + rerank" },
          { value: "85", label: "evaluation questions" },
          { value: "25/25", label: "grounded agent answers" },
        ],
        linkNote: "Written up as an engineering study rather than shipped as a product.",
      },
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

  // Contributions to other people's projects. Kept apart from `projects` on
  // purpose: the authorship is different, and the section says so.
  openSource: {
    heading: "Open source",
    subheading: "Work on codebases I don't own.",
    roleLabel: "My contribution:",
    items: [
      {
        title: "WonderSnap",
        upstream: "by Akbar Sheikh",
        tag: "Contribution",
        summary:
          "A gesture-controlled WebGL2 toy: up to 250,000 GPU particles form 33 procedural models — wonders, anatomy, engines — driven by hand tracking from the webcam, with the physics running on the GPU through transform feedback and no rendering library underneath.",
        contribution:
          "Added bilingual English/Arabic support across the whole catalogue — every model carries its name and fact in both languages, with a right-to-left layout mode, a persisted language choice and a URL override. Also simplified the state machine, removing the snap gesture so the app opens with particles already on screen, and brought the documentation back in line with the code.",
        stack: ["JavaScript", "WebGL2", "MediaPipe", "i18n / RTL", "Playwright"],
        links: [
          { label: "Repository", href: "https://github.com/AkbarSheikh-debug/wondersnap", kind: "repo" },
        ],
      },
    ] as OpenSourceItem[],
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
    direct: {
      heading: "Write to me directly",
      body: "Email is the fastest way to reach me. Tell me what you need extracted, and attach a sample document if you have one.",
      mailSubject: "Document extraction enquiry",
      elsewhere: "Elsewhere",
    },
  },

  footer: {
    builtWith: (year: number, name: string) => `© ${year} ${name}. Built with Astro & Tailwind.`,
  },

  ui: {
    themeToggle: "Toggle dark mode",
    menuToggle: "Toggle menu",
    contactCta: "Contact",
    portraitAlt: "Portrait of Firas Jamli",
  },
};
