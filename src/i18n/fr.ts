// French site copy. Must mirror the shape of src/i18n/en.ts exactly.
import { en } from "./en";

export const fr: typeof en = {
  site: {
    title: "Firas Jamli — Spécialiste en traitement intelligent de documents et extraction de données",
    description:
      "Firas Jamli est un ingénieur informatique spécialisé dans le traitement intelligent de documents (IDP) et le développement Python, transformant des PDF, scans et formulaires désordonnés en données structurées et exploitables.",
    url: "https://firasjamli.dev",
    ogImage: "/og-image.jpg",
    locale: "fr_FR",
  },

  person: {
    name: "Firas Jamli",
    legalName: "Jamli Mohamed Firas",
    role: "Ingénieur informatique — Traitement intelligent de documents & développement Python",
    tagline: "Je transforme des PDF, scans et formulaires désordonnés en données structurées.",
    location: "Sousse, Tunisie",
    locationNote:
      "Disponible pour du travail freelance à distance / international, et ouvert à de nouvelles opportunités.",
    languages: ["Arabe (langue maternelle)", "Anglais (courant)"],
    email: "firas.dev@gmail.com",
    links: {
      github: "https://github.com/firas122",
      upwork: "https://www.upwork.com/freelancers/~0114e5ec94e78abcbd",
      linkedin: "https://www.linkedin.com/in/firas-jamli-1993b542a/",
    },
  },

  nav: [
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projects" },
    { label: "Expérience", href: "#experience" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Spécialiste en traitement intelligent de documents et extraction de données",
    headline: "Je transforme des documents désordonnés en données propres et structurées.",
    subhead:
      "Ingénieur informatique basé à Sousse, en Tunisie, spécialisé dans l'IA documentaire, les pipelines OCR et l'automatisation Python — pour des clients freelance et des équipes qui ont besoin d'une extraction fiable à partir de PDF, scans et formulaires.",
    ctaPrimary: { label: "Envoyez-moi un exemple de document", href: "#contact" },
    ctaSecondary: { label: "Recrutez-moi sur Upwork" },
  },

  about: {
    heading: "À propos",
    subheading: "L'IA documentaire, de l'OCR à l'API.",
    basedInLabel: "Basé à",
    languagesLabel: "Langues",
    paragraphs: [
      "Je suis ingénieur informatique spécialisé dans le traitement intelligent de documents (IDP) et le développement Python. Mon travail se situe à l'intersection de l'OCR, de l'IA documentaire et du développement backend : je construis les pipelines qui transforment un PDF, un scan ou un formulaire non structuré en données structurées et exploitables.",
      "J'ai travaillé sur l'ensemble de la chaîne de l'automatisation documentaire — des pipelines OCR construits avec Pytesseract et OpenCV, aux workflows d'extraction en production sur des plateformes comme Sensible.so, jusqu'aux backends FastAPI et API qui exposent ensuite ces données.",
      "Basé à Sousse, en Tunisie, je travaille à distance avec des clients et des équipes freelance à l'international, et je suis ouvert à de nouvelles opportunités. Courant en anglais, langue maternelle arabe.",
    ],
  },

  services: {
    heading: "Services",
    subheading: "Ce que je peux faire pour vos documents.",
    items: [
      {
        title: "Extraction de données documentaires",
        description:
          "Extraction de données structurées à partir de PDF, scans, formulaires et documents d'identité — conçue pour rester précise sur des entrées réelles et imparfaites.",
      },
      {
        title: "Pipelines OCR",
        description:
          "Pipelines OCR sur mesure en Python avec OpenCV et Tesseract, ajustés pour des types de documents et des qualités de scan spécifiques.",
      },
      {
        title: "Implémentation & configuration de Sensible.so",
        description:
          "Mise en place et configuration des configs d'extraction et des empreintes (fingerprints) Sensible.so par type de document, avec génération automatisée de configs à partir d'échantillons.",
      },
      {
        title: "API d'extraction sur mesure & automatisation",
        description:
          "Backends Python et FastAPI qui transforment la logique d'extraction en API fiables et appelables, et en workflows automatisés.",
      },
    ],
  },

  projects: {
    heading: "Projets",
    subheading: "Des études de cas, pas une simple vitrine.",
    problemLabel: "Problème :",
    approachLabel: "Approche :",
    outcomeLabel: "Résultat :",
    items: [
      {
        title: "Générateur de configs d'empreintes Sensible.so",
        tag: "Outillage",
        problem:
          "Construire manuellement des configurations d'empreintes Sensible.so pour un nouveau type de document est lent et répétitif quand on doit traiter de nombreux PDF d'exemple.",
        approach:
          "Développement d'un outil avec Claude Code qui génère automatiquement des configurations d'empreintes Sensible à partir d'un ensemble de PDF d'exemple d'un type de document donné.",
        stack: ["Python", "Sensible.so", "Claude Code"],
        outcome:
          "Transforme un dossier de documents d'exemple en configs d'empreintes prêtes à l'emploi, supprimant l'étape de configuration manuelle.",
      },
      {
        title: "Nova Assistant",
        tag: "Produit IA",
        problem:
          "Les acheteurs en ligne sur le marché tunisien ont besoin d'un moyen conversationnel de trouver des produits et d'obtenir des réponses sans fouiller dans des catalogues.",
        approach:
          "Développement d'un chatbot assistant d'achat IA : un backend FastAPI propulsé par Gemini et Supabase, associé à une application mobile développée avec Expo (React Native).",
        stack: ["FastAPI", "Gemini", "Supabase", "Expo", "React Native"],
        outcome:
          "Un assistant d'achat IA fonctionnel avec une expérience mobile axée sur le chat, pensé spécifiquement pour le marché tunisien.",
      },
      {
        title: "iSteps",
        tag: "Ce que je construis actuellement",
        problem:
          "Les entreprises en Tunisie et dans la région MENA dépendent encore fortement du traitement manuel des documents — factures, formulaires, pièces d'identité — avec peu d'outils d'IA documentaire accessibles conçus pour la région.",
        approach:
          "Mon propre projet d'IA documentaire, ciblant la Tunisie et la région MENA, avec des outils d'extraction et d'automatisation documentaire fondés sur le même travail d'IDP que je réalise pour mes clients.",
        stack: ["Python", "IA documentaire", "OCR"],
        outcome:
          "Encore à un stade précoce — c'est ce que je construis actuellement. Pas encore de clients à citer, juste la direction.",
      },
    ],
  },

  testimonial: {
    eyebrow: "Avis client",
    heading: "Ce que disent mes clients.",
    quote:
      "Firas est un chef de projet exemplaire capable d'aider sur toute tâche technique dont vous pourriez avoir besoin. Nous le recommanderions avec plaisir pour n'importe quel poste qui l'intéresse.",
    rating: 5,
    ratedOutOf5: (rating: number) => `Noté ${rating} sur 5 étoiles`,
    source: "Client Upwork",
    verifiedOn: "Vérifié sur Upwork",
    context: "Projet d'extraction PDF & modélisation JSON · plus de 6 500 heures réalisées",
  },

  experience: {
    heading: "Expérience",
    subheading: "Là où j'ai construit tout ça.",
    items: [
      {
        role: "Développeur en traitement intelligent de documents",
        company: "Kalepa",
        period: "Mars 2023 (contrat terminé)",
        description: "Développement de workflows d'extraction documentaire propulsés par l'IA.",
      },
      {
        role: "Chef de projet / Développeur",
        company: "Shopium",
        period: "Oct. 2021 – Nov. 2022 · Temps plein",
        description: "Développement mobile et backend.",
      },
      {
        role: "Développeur IA",
        company: "Freingo",
        period: "Nov. 2020 – Sep. 2021",
        description: "Développement d'un pipeline OCR pour la lecture de tickets avec Pytesseract, OpenCV et NumPy.",
      },
      {
        role: "Développeur IA",
        company: "Pixemantic",
        period: "Août 2020 – Nov. 2020",
        description: "Détection de documents et extraction de données à partir de cartes d'identité et de passeports.",
      },
    ],
  },

  skills: {
    heading: "Compétences",
    subheading: "Les outils que j'utilise vraiment.",
    groups: [
      {
        category: "IA documentaire / OCR",
        items: ["Sensible.so", "Pytesseract", "OpenCV", "Conception de pipelines OCR", "Classification de documents"],
      },
      {
        category: "Python & Backend",
        items: ["Python", "FastAPI", "NumPy", "API REST", "Scripts d'automatisation"],
      },
      {
        category: "Mobile",
        items: ["React Native", "Expo"],
      },
      {
        category: "Données / Cloud",
        items: ["Supabase", "Google Gemini API", "Git"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Parlons de vos documents",
    body: "Vous avez un PDF, un scan ou un formulaire à transformer en données structurées ? Envoyez-moi un exemple et une courte description de votre besoin — je vous dirai honnêtement si c'est une bonne adéquation.",
    hireMeUpwork: "Recrutez-moi sur Upwork",
    form: {
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Qu'avez-vous besoin d'extraire ?",
      messagePlaceholder: "Décrivez vos documents, ou déposez un lien vers un exemple.",
      submit: "Envoyer le message",
      emailDirectPrefix: "Ou écrivez-moi directement à",
    },
    formspreeId: "YOUR_FORMSPREE_ID",
  },

  footer: {
    builtWith: (year: number, name: string) => `© ${year} ${name}. Créé avec Astro & Tailwind.`,
  },

  ui: {
    themeToggle: "Activer/désactiver le mode sombre",
    menuToggle: "Ouvrir/fermer le menu",
    contactCta: "Contact",
    portraitAlt: "Portrait de Firas Jamli",
  },
};
