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
        "navbar-bg": "#f5e6d3",
        "link-text": "#5C4033",
        "link-hover-text": "#7A5A4D",
        "link-hover-bg": "#e2d2bd",
        "button-bg": "#5C4033",
        "button-hover-bg": "#7A5A4D",
        "button-text": "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
