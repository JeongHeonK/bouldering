import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#6B7280",
      },
      backgroundColor: {
        green: "#9DF830",
        "card-bg": "#272727",
        lightGray: "#F9F9F9",
      },
      backgroundImage: {
        seoul: "url('/seoul/CoverSeoul.png')",
        kl: "url('/kl/coverKL.png')",
        manila: "url('/manila/coverManila.png')",
        tokyo: "url('/tokyo/CoverTokyo.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
