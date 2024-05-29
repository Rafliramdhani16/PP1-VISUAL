/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        jarak: "7px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".rounded-l-gede": {
          "border-top-left-radius": "2.5rem",
          "border-bottom-left-radius": "2.5rem",
        },
        ".shadow-custom": {
          "box-shadow": "6px 8px black",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
