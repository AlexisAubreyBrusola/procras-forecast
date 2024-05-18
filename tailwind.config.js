/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "sans": "Poppins, Arial, sans-serif",
      "mono": "Space Mono, monospace",
      "roboto": "Roboto Mono, monospace",
    },

    screens: {
      "phone": "480px",
      "tablet": "768px",
      "laptop": "1024px",
      "desktop": "1920px",
    },

    extend: {
      colors: {
        "mainBlue": "#252955",
        "mainWhite": "#e9eaee",
        "hoverColor": "#a8a9bb",
      },
    },
  },
  plugins: [],
};
