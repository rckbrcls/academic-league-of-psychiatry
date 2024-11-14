import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1758AF",
          secondary: "#092E60",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#000711",
          "base-200": "#101010",
        },
        light: {
          primary: "#67CAFD",
          secondary: "#A8DFFB",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#EAF8FF",
          "base-200": "#EEEEEE",
        },
      },
    ],
  },
} satisfies Config;
