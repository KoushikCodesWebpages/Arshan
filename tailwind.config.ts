import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping your palette to Tailwind tokens
        primary: "#1A365D",
        secondary: "#64748B",
        tertiary: "#D4AF37",
        neutral: "#F8FAFC",
        page: "#F3F4F6",
        danger: "#B91C1C",
        "border-light": "#E2E8F0",
        "text-main": "#1E293B",
        "text-muted": "#64748B",
      },
      borderRadius: {
        '2xl': '1rem', // Arshan style rounded corners
      },
    },
  },
  plugins: [],
};
export default config;