/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "e-primary-bg": "#ffffff",
      "e-secondary-bg": "##DADFF5",
      "e-terciary-bg": "#1B1F3B",
      "e-primary-text": "#000315",
      "e-secondary-text": "#666873",
      "e-terciary-text": "#5C9ACA",
      "e-success": "#187F19",
      "e-info": "#1A4DB2",
      "e-warning": "#B56300",
      "e-danger": "#99103B",
    },
  },
  plugins: [],
};
