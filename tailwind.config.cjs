const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    fontFamily: {
      'serif': ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'mono': ['Spline Sans Mono', ...defaultTheme.fontFamily.sans]
    }
	},
	plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
