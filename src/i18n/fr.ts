// French site copy. Must mirror the shape of src/i18n/en.ts exactly.
import { en } from "./en";
import type { OpenSourceItem } from "./en";

export const fr: typeof en = {
  site: {
    title: "Firas Jamli — Spécialiste en traitement intelligent de documents et extraction de données",
    description:
      "Firas Jamli est un ingénieur informatique spécialisé dans le traitement intelligent de documents (IDP) et le développement Python, transformant des PDF, scans et formulaires désordonnés en données structurées et exploitables.",
    url: "https://portfolio-firas-jamli.vercel.app",
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
    email: "firas.jamli.dev@gmail.com",
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
    { label: "Open source", href: "#open-source" },
    { label: "Expérience", href: "#experience" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    greeting: "Bonjour, je suis",
    availability: "Disponible pour une mission",
    scrollCue: "Défiler",
    eyebrow: "Spécialiste en traitement intelligent de documents et extraction de données",
    headline: "Je transforme des documents désordonnés en données propres et structurées.",
    subhead:
      "Ingénieur informatique basé à Sousse, en Tunisie, spécialisé dans l'IA documentaire, les pipelines OCR et l'automatisation Python — pour des clients freelance et des équipes qui ont besoin d'une extraction fiable à partir de PDF, scans et formulaires.",
    ctaPrimary: { label: "Envoyez-moi un exemple de document", href: "#contact" },
    ctaSecondary: { label: "Recrutez-moi sur Upwork" },
  },

  proof: {
    items: [
      { value: "99 %", label: "montants de tickets extraits correctement" },
      { value: "1 519", label: "tests automatisÃ©s sur les projets livrÃ©s" },
      { value: "4", label: "formats de documents traitÃ©s de bout en bout" },
      { value: "2", label: "langues livrÃ©es dans chaque interface" },
    ],
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
        title: "Kvitto — une extraction de tickets qui se corrige elle-même",
        tag: "IA documentaire",
        featured: true,
        problem:
          "L'OCR sur une photo de ticket de caisse se trompe forcément de chiffre : le papier thermique pâlit, se gondole et accroche les reflets. La plupart des extracteurs renvoient ce qu'ils ont lu et vous laissent découvrir le mauvais montant plus tard — ce qui, en comptabilité, est pire qu'un échec franc.",
        approach:
          "Un ticket suédois est surdéterminé : les lignes d'articles, le tableau de TVA et les lignes de paiement décrivent tous le même achat. J'ai construit un cœur arithmétique qui exploite cette redondance — huit contrôles de réconciliation, puis une recherche de réparation sous contraintes qui identifie le chiffre mal lu. Il signale l'ambiguïté au lieu de deviner quand les indices sont faibles. Au-dessus, une lecture OCR en quatre passes (RapidOCR et Tesseract, sur la photo et sur une copie redressée) arbitrée par le réconciliateur, servie en FastAPI à une application React Native.",
        stack: ["Python", "FastAPI", "RapidOCR", "Tesseract", "OpenCV", "React Native", "Expo"],
        outcome:
          "99 % des montants imprimés corrects sur 26 tickets réels transcrits à la main — et tout montant que les moteurs parviennent à lire est désormais placé sur la bonne ligne : la perte restante est optique, pas structurelle.",
        metrics: [
          { value: "99 %", label: "montants corrects (556/562)" },
          { value: "244/244", label: "montants lus bien placés" },
          { value: "1 519", label: "tests automatisés, CI au vert" },
        ],
        linkNote:
          "Dépôt privé — il traite de vrais tickets. Je peux volontiers détailler l'architecture ou faire une démo.",
      },
      {
        title: "DBShow — un schéma qu'on voit, et un linter qui le relit",
        tag: "Outil développeur",
        problem:
          "Un schéma de base de données est un graphe que personne ne voit, et les défauts qui coûtent cher — une clé étrangère qui pointe vers rien, un type incompatible, un index manquant, une dépendance circulaire sans ordre d'insertion valide — sont invisibles dans un dump DDL.",
        approach:
          "Analyse du DDL SQL, des fichiers SQLite ou du JSON entièrement dans le navigateur vers un modèle unique, rendu en graphe 3D interactif, puis lint des relations avec une explication en langage clair et le DDL de correction à copier. Permet aussi de comparer deux versions d'un schéma pour montrer ce qu'une migration a changé. La couche WebGL est réglée à la main : le texte est une texture canvas, donc une table reste un seul appel de rendu.",
        stack: ["Next.js", "TypeScript", "React Three Fiber", "sql.js", "WebGL", "Tailwind"],
        outcome:
          "Sept règles de lint sur quatre formats d'entrée, interface bilingue EN/FR, et aucun schéma ne quitte le navigateur. Le seul code serveur — le chargement par URL — est protégé contre le SSRF par une validation DNS au moment de la connexion.",
        metrics: [
          { value: "4", label: "formats d'entrée analysés" },
          { value: "7", label: "défauts de relation détectés" },
          { value: "0", label: "schéma envoyé où que ce soit" },
        ],
        links: [
          { label: "Démo en ligne", href: "https://dbshow.vercel.app", kind: "demo" },
          { label: "Code source", href: "https://github.com/firas122/DBshow", kind: "repo" },
        ],
      },
      {
        title: "Étude sur la recherche — ce qui améliore vraiment le RAG",
        tag: "Recherche",
        problem:
          "Les conseils sur le RAG sont surtout affirmés, rarement mesurés. Avant de placer de la recherche documentaire devant les documents d'un client, je voulais savoir quelles étapes justifient leur coût sur un corpus réel et restreint.",
        approach:
          "Cinq systèmes de recherche construits sur les mêmes 15 tickets — vecteurs naïfs, puis hybride BM25 + vecteurs fusionnés par reciprocal rank fusion avec un reranker cross-encoder, puis réécriture de requête par LLM, puis recherche parent-enfant, puis un agent à outils — évalués sur 85 questions rédigées après le gel des étapes précédentes, avec intervalles de confiance bootstrap et comparaisons appariées.",
        stack: ["Python", "ChromaDB", "BM25", "Cross-encoder", "SQLite", "Évaluation"],
        outcome:
          "La recherche hybride avec reranking double presque le hit@3 sur des questions inédites (0,39 → 0,71) ; la réécriture par LLM n'apporte presque rien, sauf sur les questions de suivi, où elle est structurellement indispensable. L'agent a répondu à 25/25 questions agrégées, chaque chiffre vérifié contre un résultat d'outil.",
        metrics: [
          { value: "+82 %", label: "hit@3 grâce à l'hybride + rerank" },
          { value: "85", label: "questions d'évaluation" },
          { value: "25/25", label: "réponses d'agent vérifiées" },
        ],
        linkNote: "Documenté comme une étude d'ingénierie plutôt que livré comme produit.",
      },
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

  openSource: {
    heading: "Open source",
    subheading: "Du travail sur des bases de code qui ne sont pas les miennes.",
    roleLabel: "Ma contribution :",
    items: [
      {
        title: "WonderSnap",
        upstream: "par Akbar Sheikh",
        tag: "Contribution",
        summary:
          "Un projet WebGL2 piloté aux gestes : jusqu'à 250 000 particules GPU forment 33 modèles procéduraux — monuments, anatomie, moteurs — commandés par le suivi de la main via la webcam, la physique tournant sur le GPU en transform feedback, sans aucune bibliothèque de rendu.",
        contribution:
          "Ajout du bilinguisme anglais/arabe sur tout le catalogue — chaque modèle porte son nom et son fait dans les deux langues, avec une mise en page de droite à gauche, un choix de langue persistant et un paramètre d'URL. Également : simplification de la machine à états, suppression du geste « snap » pour que l'application s'ouvre avec les particules déjà à l'écran, et remise à niveau de la documentation.",
        stack: ["JavaScript", "WebGL2", "MediaPipe", "i18n / RTL", "Playwright"],
        links: [
          { label: "Dépôt", href: "https://github.com/AkbarSheikh-debug/wondersnap", kind: "repo" },
        ],
      },
    ] as OpenSourceItem[],
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
    direct: {
      heading: "Écrivez-moi directement",
      body: "L'email est le moyen le plus rapide de me joindre. Dites-moi ce que vous avez besoin d'extraire, et joignez un document d'exemple si vous en avez un.",
      mailSubject: "Demande d'extraction de documents",
      elsewhere: "Ailleurs",
    },
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
