/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lf-orange': '#F36F20',
        'lf-orange-light': '#FF8C42',
        'lf-orange-dark': '#D45A10',
        'lf-navy': '#1A2229',
        'lf-charcoal': '#212121',
        'lf-slate': '#37474F',
        'lf-blue': '#2196F3',
        'lf-gray': '#585663',
        'lf-light': '#F5F5F5',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        proxima: ['ProximaNova-Semibold', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
