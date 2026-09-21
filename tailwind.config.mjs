/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#8b7cf6",
          dim: "#6d5cd6",
          bright: "#b3a8ff",
        },
        ink: {
          950: "#0a0713",
          900: "#120e1f",
          800: "#181329",
          700: "#221b38",
          600: "#332a4d",
          400: "#6c6389",
          200: "#cec7e0",
          100: "#ede9f7",
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
          "linear-gradient(to right, rgba(18,14,31,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,14,31,0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(237,233,247,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,233,247,0.06) 1px, transparent 1px)",
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
