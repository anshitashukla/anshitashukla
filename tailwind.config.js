/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f4f4f5",
          subtle: "#fafafa",
        },
        content: {
          DEFAULT: "#09090b",
          muted: "#71717a",
          faint: "#a1a1aa",
        },
        border: {
          DEFAULT: "#e4e4e7",
          strong: "#d4d4d8",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
