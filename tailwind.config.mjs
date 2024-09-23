/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        stretchpro: ["StretchPro", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#01063D",
          50: "#E5F1FF",
          100: "#D0E5FF",
          200: "#AACDFF",
          300: "#77AAFF",
          400: "#4275FF",
          500: "#1840FF",
          600: "#0020FF",
          700: "#0023FF",
          800: "#001FE0",
          900: "#01063D",
          950: "#01041F",
        },
        brand_purple: {
          DEFAULT: "#791AF2",
          50: "#F5F1FF",
          100: "#ECE6FF",
          200: "#DBD0FF",
          300: "#C2ABFF",
          400: "#A67CFF",
          500: "#8C47FF",
          600: "#8121FF",
          700: "#791AF2",
          800: "#600CCB",
          900: "#500CA6",
          950: "#300471",
        },
        brand_cyan: {
          DEFAULT: "#16D1FA",
          50: "#ECFEFF",
          100: "#CEFAFF",
          200: "#A4F3FD",
          300: "#65E8FB",
          400: "#16D1FA",
          500: "#03B6D7",
          600: "#0690B4",
          700: "#0C7492",
          800: "#145E76",
          900: "#154D64",
          950: "#073245",
        },
        brand_pink: {
          DEFAULT: "#F427CB",
          50: "#FFF4FD",
          100: "#FFE7FC",
          200: "#FFCEF8",
          300: "#FFA8EF",
          400: "#FE74E3",
          500: "#F427CB",
          600: "#D920B0",
          700: "#B4178E",
          800: "#931572",
          900: "#78175D",
          950: "#51013C",
        },
      },
      animation: {
        spin: "spin 9s linear infinite",
        movelaptop: "movelaptop 8s ease-in infinite",
        fadeIn: "fadeIn 1s cubic-bezier(0, 0, 0.2, 1)",
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
        fadeIn: {
          "0%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        "header-banner": "url('/image/banner.webp')",
        "about-banner": "url('/image/aboutnew.webp')",
        "call-action": "url('/image/calltoaction.webp')",
      },
    },
  },
  plugins: [],
};
