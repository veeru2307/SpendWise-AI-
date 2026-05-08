import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 400: "#2dd4bf", 500: "#14b8a6", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" },
        accent: { 400: "#fb923c", 500: "#f97316" },
        surface: { DEFAULT: "#0a0f0e", 50: "#111918", 100: "#1a2524", 200: "#243130" },
      },
      fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
    },
  },
  plugins: [],
};
export default config;
