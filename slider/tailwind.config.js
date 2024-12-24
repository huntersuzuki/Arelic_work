/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image1:
          'url("https://www.arrelic.com/uploads/media/10273997471662640500.jpg")',
        image2:
          'url("https://www.arrelic.com/uploads/media/17639471591662640500.jpg")',
      },
    },
  },
  plugins: [],
};
