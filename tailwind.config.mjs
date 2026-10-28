/** @type {import('tailwindcss').Config} */

// Design system for an Intelligent Document Processing engineer.
//
// The palette is taken from the domain rather than from a template: the three
// states a parsed document can be in. Green is "reconciled" — every check
// passed; amber is "ambiguous" — more than one reading fits; red is "failed".
// Those are the words this work is actually judged in, so they carry the brand.
//
// Neutrals are paper and ink, biased very slightly green so they sit with the
// accent instead of fighting it. Deliberately not warm cream, and deliberately
// not the violet/blue gradient every engineering portfolio reaches for.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // "Reconciled" — the primary accent. Used with restraint: rules,
        // labels, key figures. Ink and paper carry the page.
        accent: {
          DEFAULT: "#0f7a56",
          dim: "#0b5c41",
          bright: "#3fd39b",
          soft: "#e4f2ec",
          line: "#b7dcca",
        },
        // "Ambiguous" — a figure that needs a human. Also the hire-me signal.
        signal: {
          DEFAULT: "#a06a00",
          bright: "#e3a53f",
          soft: "#faf0db",
        },
        // "Failed" — reserved for genuine problems, never decoration.
        flag: {
          DEFAULT: "#a8362b",
          bright: "#ef7a68",
        },
        ink: {
          50: "#f4f6f5",
          100: "#e9edeb",
          200: "#ccd5d1",
          400: "#687670",
          600: "#3b4742",
          700: "#27322d",
          800: "#19211d",
          900: "#111815",
          950: "#0a0f0d",
        },
      },
      fontFamily: {
        // Instrument Serif for voice — a document face, high contrast, used
        // only at display sizes. IBM Plex Sans for substance: it was drawn for
        // technical documentation, which is the job. Plex Mono for anything
        // that is data — field labels, metrics, stack badges.
        display: ["Instrument Serif", "Georgia", "Times New Roman", "serif"],
        sans: ["IBM Plex Sans", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        field: "0.18em",
      },
      backgroundImage: {
        // A single hairline measure rule, not a dot grid: documents are read in
        // lines, and the page echoes that at very low contrast.
        rule: "repeating-linear-gradient(to bottom, rgba(17,24,21,0.035) 0 1px, transparent 1px 32px)",
        "rule-dark": "repeating-linear-gradient(to bottom, rgba(233,237,235,0.045) 0 1px, transparent 1px 32px)",
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.2,0.7,0.2,1) both",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};
