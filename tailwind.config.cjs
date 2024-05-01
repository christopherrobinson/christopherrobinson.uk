/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        primary: {
           50: '#ecfdf6',
          100: '#d1fae8',
          200: '#a7f3d6',
          300: '#6de8c1',
          400: '#33d4a6',
          500: '#0fba8f',
          600: '#049372',
          700: '#037960',
          800: '#05604d',
          900: '#064e41',
          950: '#022c25',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.800'),
            blockquote: {
              borderColor: theme('colors.primary.600'),
              color: theme('colors.zinc.600'),
              fontWeight: theme('fontWeight.light'),
              quotes: 'none',
            },
            strong: {
              fontWeight: theme('fontWeight.medium'),
            },
          },
        },
      }),
    },
  },
}
