import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#132031',
          light: '#1a2d44',
        },
        card: '#f6f7f9',
        accent: '#1d4ed8',
        foreground: '#14181f',
      },
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

export default config
