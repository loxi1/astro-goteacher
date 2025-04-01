/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1536px',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
      
        primary: {
          50: "#e0f2ff",     // Azul más claro
          100: "#b3e0ff",
          200: "#80ccff",
          300: "#4db8ff",
          400: "#1aa3ff",
          500: "#0099FF",     // Color base del logo/banner
          600: "#008ae6",
          700: "#007acc",
          800: "#0066b3",
          900: "#005299",
        },
      
        danger: {
          500: "#E52421",     // Rojo del logo
          600: "#C70000",
        },
      
        warning: {
          500: "#F68B1F",     // Naranja del logo
          600: "#FF6F00",
        },
      
        accent: {
          500: "#FFC20E",     // Amarillo del logo
          600: "#F9D423",
        },
      
        neutral: {
          50:  "#fdfdfd",  // casi blanco, ideal para fondos
          100: "#f7f7f7",  // gris muy claro
          200: "#e5e5e5",  // gris claro útil para bordes
          300: "#d4d4d4",
          400: "#a3a3a3",  // gris medio para texto secundario
          500: "#737373",  // texto base neutro
          600: "#525252",  // texto fuerte
          700: "#404040",  // elementos oscuros (modo claro)
          800: "#262626",  // modo oscuro principal
          900: "#171717",  // casi negro (para contraste)
          950: "#0a0a0a",  // fondo profundo oscuro
        },       
      
        black: "#000000",
        white: "#FFFFFF",
      },      
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);" },
        },
        fadeInShadowDark: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);" },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
