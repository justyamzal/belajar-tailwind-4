// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      spacing: { 13: "3.25rem" },
      fontFamily: { inter: ["Inter", "ui-sans-serif", "system-ui"] },
      animation: { "spin-slow": "spin 3s linear infinite", goyang: "goyang 1s ease-in-out infinite" },
      keyframes: {
        goyang: { "0%,100%": {transform:"rotate(-10deg)"}, "50%": {transform:"rotate(10deg)"} }
      }
    }
  },
  plugins: [
    // optional:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
