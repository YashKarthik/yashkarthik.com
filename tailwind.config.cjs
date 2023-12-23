const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      'serif': ['Gilda Display', 'Cormorant', ...defaultTheme.fontFamily.serif],
      'serif-styled': ['CormorantVariable', ...defaultTheme.fontFamily.serif],
      'heading': ['Sofia Sans Extra Condensed', ...defaultTheme.fontFamily.sans],
      'sans': ['Geist', ...defaultTheme.fontFamily.sans],
      'mono': ['Geist Mono', ...defaultTheme.fontFamily.mono],
      'logo': ['Source Serif Pro', 'Gilda Display', 'Cormorant Infant', ...defaultTheme.fontFamily.serif],
    },
	},
	plugins: [require('@tailwindcss/typography'), require("@tailwindcss/container-queries")],
  darkMode: 'class'
}
