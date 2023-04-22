module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'home-background-color': '#D1D5DB',
        'sidebar-background-color': '#152D5D',
        'blue-home-color': '#162E5E',
        'font-sidebar-color': '#9CA3AF',
        'font-home-color': '#353638',
        'border-color': '#343F52',
        'background-form': '#F8FAFC',
        'background-form-cad': '#EEF0F2',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
