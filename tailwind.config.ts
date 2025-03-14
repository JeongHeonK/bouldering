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
        seoul: "url('/seoul/coverSeoul.jpeg')",
        kl: "url('/kl/coverKL.jpeg')",
        manila: "url('/manila/coverManila.jpeg')",
        tokyo: "url('/tokyo/coverTokyo.jpeg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
