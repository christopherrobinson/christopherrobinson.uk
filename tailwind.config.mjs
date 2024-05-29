/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        primary: {
           50: '#ecfdf6',
          100: '#d1fae8',
          200: '#a7f3d6',
          300: '#6de8c1',
          400: '#33d4a6',
          500: '#0fba8f',
          600: '#049372',
          700: '#037960', // DEFAULT
          800: '#05604d',
          900: '#064e41',
          950: '#022c25',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', ...fontFamily.sans],
        mono: ['Geist Mono', ...fontFamily.mono],
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
            h2: {
              fontWeight: theme('fontWeight.medium'),
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
