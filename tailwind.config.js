/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#cebea5",
        "custom-black": "#0d0d0d",
        "custom-orange": "#ff5631",
        "custom-green": "#57cb4c",
        "custom-black-second": "#1e1e1e",
      },
    },
  },
  plugins: [],
};
