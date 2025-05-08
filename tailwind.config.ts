// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        'desert-sand': '#D2B48C',
        'sandstone': '#C2A679',
      },
      animation: {
        expand: 'expand 1.5s ease-out forwards',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
}

export default config
