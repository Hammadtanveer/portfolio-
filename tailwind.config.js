/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink:    "rgb(var(--color-ink) / <alpha-value>)",
        panel:  "rgb(var(--color-panel) / <alpha-value>)",
        panel2: "rgb(var(--color-panel2) / <alpha-value>)",
        line:   "rgb(var(--color-line) / <alpha-value>)",
        violet: "rgb(var(--color-violet) / <alpha-value>)",
        cyan:   "rgb(var(--color-cyan) / <alpha-value>)",
        ember:  "rgb(var(--color-ember) / <alpha-value>)",
        mist:   "rgb(var(--color-mist) / <alpha-value>)",
        fg:     "rgb(var(--color-text) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgb(var(--color-violet) / 0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgb(var(--color-cyan) / 0.12), transparent 45%)",
      },
    },
  },
  plugins: [],
};
