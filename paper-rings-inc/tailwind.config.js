/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3B82F6',
        'brand-cyan': '#22D3EE',
        'brand-green': '#4ADE80',
        'brand-yellow': '#FACC15',
        'brand-orange': '#FB923C',
        'brand-red': '#EF4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(90deg, #3B82F6 0%, #22D3EE 20%, #4ADE80 40%, #FACC15 60%, #FB923C 80%, #EF4444 100%)',
      },
    },
  },
  plugins: [],
};

