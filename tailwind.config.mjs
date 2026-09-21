/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#4dd4c9",
          dim: "#2fa89e",
          bright: "#7ce8de",
        },
        ink: {
          950: "#05070a",
          900: "#0a0e14",
          800: "#0f1520",
          700: "#161e2c",
          600: "#232f42",
          400: "#5b6b85",
          200: "#c3ccdb",
          100: "#e6eaf2",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,21,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,21,32,0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(230,234,242,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,234,242,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
