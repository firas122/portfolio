/** @type {import('tailwindcss').Config} */

// Design tokens for a Document AI engineer's site.
//
// Every colour resolves through a CSS custom property declared in global.css,
// so there is exactly one set of class names and the light/dark split lives in
// one place instead of being sprayed across components as `dark:` variants.
// Channels are stored unprefixed ("240 180 41") so Tailwind can still apply
// opacity modifiers like `text-gold/60`.
//
// The aesthetic: cold deep surfaces with one warm light source. Extraction is
// the act of lighting up the part of a page that matters, so the accent is the
// gold of a highlight falling on a document, and the grounds are the dark of
// the table it sits on. One accent family, spent deliberately.
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: themed("bg"),
        panel: {
          DEFAULT: themed("panel"),
          raised: themed("panel-raised"),
          high: themed("panel-high"),
        },
        edge: {
          DEFAULT: themed("edge"),
          strong: themed("edge-strong"),
        },
        fg: {
          DEFAULT: themed("fg"),
          muted: themed("fg-muted"),
          faint: themed("fg-faint"),
        },
        gold: {
          DEFAULT: themed("gold"),
          bright: themed("gold-bright"),
          deep: themed("gold-deep"),
          on: themed("gold-on"),
        },
        ember: themed("ember"),
      },
      fontFamily: {
        // Familjen Grotesk carries the display type — a Swedish grotesque, which
        // is a quiet nod to the receipt work, with far more presence than a
        // neutral UI face. Archivo does the reading. DM Mono holds data.
        display: ["Familjen Grotesk", "Archivo", "system-ui", "sans-serif"],
        sans: ["Archivo", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        // A deliberate display scale, not Tailwind's default steps.
        hero: ["clamp(2.35rem, 5vw, 4.1rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        section: ["clamp(2rem, 4.2vw, 3.1rem)", { lineHeight: "1.04", letterSpacing: "-0.028em" }],
        lead: ["clamp(1.05rem, 1.6vw, 1.2rem)", { lineHeight: "1.65" }],
      },
      letterSpacing: { key: "0.2em" },
      borderRadius: { panel: "14px", pill: "999px" },
      backgroundImage: {
        // The light source. A single warm pool, off-centre, so the page has a
        // direction to it rather than an even wash.
        lamp: "radial-gradient(60rem 36rem at 12% -8%, rgb(var(--lamp) / 0.5), transparent 62%)",
        "lamp-soft": "radial-gradient(44rem 28rem at 88% 4%, rgb(var(--lamp) / 0.28), transparent 60%)",
        "gold-sweep": "linear-gradient(104deg, rgb(var(--gold)), rgb(var(--ember)))",
        "edge-fade": "linear-gradient(to right, transparent, rgb(var(--edge-strong)), transparent)",
      },
      transitionTimingFunction: { out: "cubic-bezier(0.19, 1, 0.22, 1)" },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.19,1,0.22,1) both",
        sweep: "sweep 5.5s cubic-bezier(0.45,0,0.2,1) infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        // The scan pass that lights each field in turn.
        sweep: {
          "0%, 8%": { transform: "translateY(-10%)", opacity: "0" },
          "18%": { opacity: "1" },
          "82%": { opacity: "1" },
          "100%": { transform: "translateY(760%)", opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
      },
    },
  },
  plugins: [],
};
