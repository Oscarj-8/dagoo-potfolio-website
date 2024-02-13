/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#613886",
        secondaryColor: "#34C1ED",
      },
    },
  },
  plugins: [],
};
