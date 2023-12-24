// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    fontFamily: {
      abc: ['Dela Gothic One', 'cursive'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      comfortaa: ['Comfortaa', 'sans'],
      abc2: ['Comfortaa', 'sans-serif'],
      open: ['Lato', 'sans-serif'], // Use 'Lato' for the 'open' font family
      open1: ['Dela Gothic One', 'sans-serif'],
    },
  },
  plugins: [],
}

export default config
