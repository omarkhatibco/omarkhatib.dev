module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["dm", "system-ui"],
      serif: ["dm", "Georgia"],
      mono: ["dm", "SFMono-Regular"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
