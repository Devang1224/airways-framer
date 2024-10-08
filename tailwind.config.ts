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
        boxShadow:{
          'innerCustom': 'inset 0 2px 5px rgba(171, 29, 29, 0.5)',
        },
        flexGrow: {
          4: '4'
        }
      },
    },
  },
  plugins: [],
};
export default config;
