/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ["Shabnam", "sans-serif"],
        iransans: ["IRANSans-web", "sans-serif"],
      },
      colors: {
        "blue-light": "#a8c6de",
        "purple-primary": "#231e39",
        "purple-secondary": "#28223f",
        "purple-tertiary": "#1f1a32",
        "dark-primary": "#333300",
        "yellow-primary": "#ffdf00",
      },
    },
  },
  plugins: [],
};
