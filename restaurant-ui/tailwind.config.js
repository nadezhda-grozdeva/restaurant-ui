/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      'primary': '#2C2F24',
      'secondary': '#AD343E',
      'tertiary': '#DBDFD0',
    },
    backgroundColor: {
      'primary': '#474747',
      'secondary': '#AD343E',
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm': ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
       'phone-icon': "url('/src/assets/images/icons/phone.svg')",
       'mail-icon': "url('/src/assets/images/icons/mail.svg')",
      }
    }
  },
  plugins: [],
}

