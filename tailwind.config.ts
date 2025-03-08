import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "2000px" ,
      mxxl: { max: "1440px" },
      mxl: { max: "1400px" },
      mlxg:{ max:"1280px" },
      mlg: { max: "1049px" },
      mmlg: { max: "976px" },
      mmd: { max: "768px" },
      msm: { max: "639px" },
      mxs: { max: "480px" },
      mxxs: { max: "400px" },
      mxxss: { max: "375px" },
      mxxssw: { max: "355px" },
      mxxxs: { max: "320px" },
      "ms-height": { raw: "(max-height: 700px)" },
      "mxl-height": { raw: "(max-height: 850px)" },
    },
    fontFamily: {
      instrument: ["Instrument Serif", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
       // Headings
  "h-xxl": ["6rem", { lineHeight: "100%", fontWeight: 400 }],
  "h-xl": ["4.5rem", { lineHeight: "110%", fontWeight: 400 }],
  "h-lx": ["3.56rem", { lineHeight: "100%", fontWeight: 400 }],
  "h-lm": ["2.5rem", { lineHeight: "110%", fontWeight: 400 }],
  "h-ls": ["2.25rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-l": ["2rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-m": ["1.75rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-s": ["1.5rem", { lineHeight: "100%", fontWeight: 400 }],
  "h-c": ["1.125rem", { lineHeight: "155.556%", fontWeight: 500 }],

  // Responsive Headings
  "h-xxlr": ["4rem", { lineHeight: "100%", fontWeight: 400 }],
  "h-xlr": ["3rem", { lineHeight: "110%", fontWeight: 400 }],
  "h-lxr": ["3rem", { lineHeight: "100%", fontWeight: 400 }],
  "h-lmr": ["2.25rem", { lineHeight: "110%", fontWeight: 400 }],
  "h-lsr": ["2rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-lr": ["1.5rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-mr": ["1.5rem", { lineHeight: "160%", fontWeight: 400 }],
  "h-sr": ["1.25rem", { lineHeight: "100%", fontWeight: 400 }],

  // Paragraphs
  "p-xxl": ["1.25rem", { lineHeight: "160%", fontWeight: 400 }],
  "p-xl": ["1rem", { lineHeight: "140%", fontWeight: 400 }],
  "p-l": ["0.875rem", { lineHeight: "160%", fontWeight: 400 }],

  // Responsive Paragraphs
  "p-xxlr": ["1rem", { lineHeight: "160%", fontWeight: 400 }],
      },

      colors: {
       blackOne: "#222",
	   greyOne:"#828385",
	   blackOriginal:"#000",
	   blackTwo:"#0D0F0E",
	   lemon:"#C8EF7D",
     whiteOne:"#fff",


       
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
