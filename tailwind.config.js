/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "green-700": "#15887B",
        "green-500": "#1DC0AD",
        "green-600": "#1AAF9D",
        "green-50": "#E8F9F7",
        "grey": "#475467",
        "grey-900": "#111827",
        "grey-700": "#374151",
        "grey-600": "#4B5563",
        "grey-500": "#6B7280",
        "grey-400": "#101828",
        "grey-300": "#D1D5DB",
        "grey-200": "E5E7EB",
        "grey": "#667085"
      },
      backgroundImage: {
        code: "url('/icon-code.svg')",
      },
    },
  },
  plugins: [],
};
