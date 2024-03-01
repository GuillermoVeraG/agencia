/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ecfefe",
          100: "#d0fafb",
          200: "#abf2f7",
          300: "#82e9f2",
          400: "#2ccde2",
          500: "#13adc9",
          600: "#1186a6",
          700: "#166a88",
          800: "#1b566f",
          900: "#1c485f",
          950: "#0c2c40",
        },
        secondary: {
          50: "#fcfcfd",
          100: "#f4f4f6",
          200: "#dcdfe5",
          300: "#b9bfca",
          400: "#909aad",
          500: "#6f7c90",
          600: "#5a6477",
          700: "#4a5364",
          800: "#404854",
          900: "#3b414a",
          950: "#1d2025",
        },
      },
      animation: {
        spin: "spin 9s linear infinite",
        movelaptop: "movelaptop 8s ease-in infinite",
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        movelaptop: {
          "0%": {
            transform: "translateX(5px) rotateZ(-20deg)",
          },
          "50%": {
            transform: "translateX(-5px) rotateZ(-20deg)",
          },
          "100%": {
            transform: "translateX(5px) rotateZ(-20deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
