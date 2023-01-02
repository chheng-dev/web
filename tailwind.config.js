/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        primary: {
          DEFAULT: '#2EBAE2',
          '50': '#CFEFF8',
          '100': '#BDE9F6',
          '200': '#99DDF1',
          '300': '#76D2EC',
          '400': '#52C6E7',
          '500': '#2EBAE2',
          '600': '#1A99BE',
          '700': '#13718C',
          '800': '#0D4A5B',
          '900': '#06222A'
        },
        'secondary': {
          DEFAULT: '#F2F2F2',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F2F2F2',
          '600': '#D6D6D6',
          '700': '#BABABA',
          '800': '#9E9E9E',
          '900': '#828282'
        },
        'lightGray': {
          DEFAULT: '#F5F5F5',
          '50': '#FFFFFF', '100': '#FFFFFF', '200': '#FFFFFF', '300': '#FFFFFF', '400': '#FFFFFF', '500': '#F5F5F5', '600': '#D9D9D9', '700': '#BDBDBD', '800': '#A1A1A1', '900': '#858585'
        },
      }
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
