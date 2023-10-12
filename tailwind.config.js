/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: "#082032",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
