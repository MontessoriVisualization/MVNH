/** @type {import('tailwindcss').Config} */
import { icons } from 'lucide-react';
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icons:'rgb(183 176 163)',
          orangeRed: colors.orange[500],
          'light-orange':  colors.orange[300],
          Wht: colors.white,
          'light-blue': '#1877F2',
          'dark-blue': '#0866ff',
          'main-bg': '#E5E3DF',
          'inp-bg': '#fafafa',
        
        secondary: {
          DEFAULT: colors.orange[500], // Use `DEFAULT` instead of `Default`
          hover: colors.orange[500],
          border: colors.orange[500],
          text: colors.orange[500],
          'text-hover': colors.neutral[50], // Correct bracket syntax for object keys
        },
        primary: {
          DEFAULT: colors.neutral[50],
          hover: colors.neutral[200],
          text: colors.neutral[800],
        },
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
