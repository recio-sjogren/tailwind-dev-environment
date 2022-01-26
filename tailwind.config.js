module.exports = {
  content: ["./pages/**/*.html", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "font-sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
