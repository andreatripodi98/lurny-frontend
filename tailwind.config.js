export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lurny: {
          lightBg: "#FFFBEB",
          lightText: "#1A1A1A",
          darkBg: "#0B1220",
          darkCard: "#131C2F",
          darkText: "#ffffff",
          accent: "#4DA3FF",
          accentDark: "#1E62C9"
        }
      }
    },
  },
  plugins: [],
}


