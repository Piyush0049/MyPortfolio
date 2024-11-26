/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "gridDesign": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="80" height="80" fill="none" stroke="${value}" stroke-opacity="0.5"><path d="M0 .5H31.5V32"/></svg>` // Added stroke-opacity for transparency
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          'scrollbar-width': 'thin', // For Firefox
          'scrollbar-color': '#4A90E2 #F1F1F1', // Thumb and Track
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#4A90E2',
          borderRadius: '10px',
          border: '2px solid #E0E0E0',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#357ABD',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#F1F1F1',
          borderRadius: '10px',
        },
      });
    },
  ],
};
