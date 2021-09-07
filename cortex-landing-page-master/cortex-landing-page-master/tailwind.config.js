module.exports = {
  purge: {
    enabled: false,
    content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#000047",
      secondary: "#151594",
      "primary-dark": "#000014",
      whatsapp: "#25d366",
      "primary-blue": "#0a2249",
      "primary-blue-darker": "#06152e",
      "primary-lighter": "#369ddf",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#000047",
      secondary: "#151594",
      "primary-dark": "#000014",
      "primary-blue": "#0a2249",
      "primary-blue-darker": "#06152e",
      "primary-lighter": "#369ddf",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
