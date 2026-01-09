import frappeUIPreset from "frappe-ui/tailwind";

module.exports = {
  presets: [
    require('frappe-ui/src/utils/tailwind.config'),frappeUIPreset
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}",
    "../node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}",
    "../node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {},
  },
  plugins: [],
}
