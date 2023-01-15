const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              fontSize: defaultTheme.fontSize["2xl"],
            },
            h2: {
              fontSize: defaultTheme.fontSize["xl"],
            },
            h3: {
              fontSize: defaultTheme.fontSize["lg"],
            },
          },
        },
        DEFAULT: {
          css: {
            h1: {
              fontSize: defaultTheme.fontSize["2xl"],
            },
            h2: {
              fontSize: defaultTheme.fontSize["xl"],
            },
            h3: {
              fontSize: defaultTheme.fontSize["lg"],
            },
          },
        },
      }),
    },
    fontFamily: {
      'serif': ['Aleo', ...defaultTheme.fontFamily.serif],
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'mono': ['Spline Sans Mono', ...defaultTheme.fontFamily.sans]
    }
	},
	plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
