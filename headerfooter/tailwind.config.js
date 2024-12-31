/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parallax:
          'url("https://dhatuorganics.com/wp-content/uploads/2022/12/Flaxseeds-12.png")',
      },
    },
  },
  plugins: [],
};
