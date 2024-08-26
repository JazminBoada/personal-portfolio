/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
      colors: {
        blue: {
          regular: "#5350fe",
          btn: "#7270ff",
          inline: "#695bf9",
          soft: "#9392f8",
          light: "#e4e4ff",
        },
        gray: {
          regular: "#3b3b3b",
          dark: "#22184e",
        },
      },
    },
  },
  plugins: [],
};
