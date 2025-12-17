import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C2A27C",
        dark: "#2B2B2B",
        soft: "#F7F3EE",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  extend: {
  animation: {
    "fade-up": "fadeUp 1s ease-out",
  },
  keyframes: {
    fadeUp: {
      "0%": { opacity: 0, transform: "translateY(24px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
}

};
