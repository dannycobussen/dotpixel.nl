import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"ubuntu"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: '#fff',
        primary: '#2c3639',
        secundary: '#3f4e4f',
        tertiar: '#a27b5c',
        fourth: '#dcd7c9',
        moonstone: '#2b9eb3',
        socials: {
          linkedin: '#007bb5',
          twitter: '#55ACEE',
          gitlab: '#FC6D26',
          github: '#ADBAC7',
          lastfm: '#d51007',
          spotify: '#1ed760',
        },
        gradients: {
          title: {
           one:  '#f18805',
           two: '#d95d39',
           three: '#e5f2c9',
          },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
