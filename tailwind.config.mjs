/** @type {import('tailwindcss').Config} */

// Matched to the references supplied (sankar.work closest, plus tonybatts,
// dakshgajjar, marcomadonna, oakharbor). The shared register across all of
// them: a dark navy ground, a centred hero where the PERSON is the subject,
// the name itself carried in a bright accent, rounded pill shapes, soft glow,
// a friendly geometric sans, and ambient motion. Not editorial, not austere.
//
// Colours resolve through CSS custom properties declared in global.css so both
// themes live in one place.
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
        edge: { DEFAULT: themed("edge"), strong: themed("edge-strong") },
        fg: {
          DEFAULT: themed("fg"),
          muted: themed("fg-muted"),
          faint: themed("fg-faint"),
        },
        // Blue into violet, the gradient the references put on the name.
        brand: {
          DEFAULT: themed("brand"),
          two: themed("brand-two"),
          deep: themed("brand-deep"),
          on: themed("brand-on"),
        },
        ok: themed("ok"),
      },
      fontFamily: {
        // Poppins is the geometric sans these sites use for headings: circular
        // bowls, friendly, reads confident rather than severe. Plus Jakarta
        // Sans does the reading. Mono only for small data labels.
        display: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        name: ["clamp(2.6rem, 7vw, 5.2rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        section: ["clamp(1.9rem, 4vw, 2.9rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        lead: ["clamp(1rem, 1.5vw, 1.1rem)", { lineHeight: "1.7" }],
      },
      borderRadius: { card: "20px", pill: "999px" },
      backgroundImage: {
        "brand-text": "linear-gradient(100deg, rgb(var(--brand)), rgb(var(--brand-two)))",
        "brand-fill": "linear-gradient(100deg, rgb(var(--brand-deep)), rgb(var(--brand-two)))",
        // The ambient wash behind the hero.
        aura: "radial-gradient(44rem 30rem at 50% -6%, rgb(var(--brand) / 0.20), transparent 68%)",
        "aura-two": "radial-gradient(34rem 24rem at 82% 18%, rgb(var(--brand-two) / 0.14), transparent 65%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--brand) / 0.18), 0 18px 50px -18px rgb(var(--brand) / 0.45)",
        lift: "0 20px 50px -24px rgb(0 0 0 / 0.55)",
      },
      animation: {
        rise: "rise 0.75s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
        bob: "bob 2s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
};
