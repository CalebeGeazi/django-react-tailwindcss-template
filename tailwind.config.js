module.exports = {
  purge: {
    enabled: false, //true for production build
    content: [
      "./app/templates/*.html", // root app/templates dir
      "./app/templates/**/*.html", // root app/templates subdir
      "./**/app/templates/*.html", // pkgs app/templates dir
      "./**/app/templates/**/*.html", // pkgs app/templates subdir, mainly react templates
      "./assets/ts/*.{ts,tsx}", // typescript files, mainly react templates
      "./assets/ts/**/*.{ts,tsx}",
      "./assets/js/*.js", // javascript files, mainly react templates
      "./assets/js/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
