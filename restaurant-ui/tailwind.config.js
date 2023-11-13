/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        'primary': '#2C2F24',
        'secondary': '#AD343E',
        'tertiary': '#DBDFD0',
        'dark': '#182226',
        'darkM': '#414536',
        'heading1': '#474747',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'dm': ['"DM Sans"', 'sans-serif'],
      },
      lineHeight: {
        '11': '3.78125rem',
        '12': '6rem'
      },
      backgroundColor: {
        'primary': '#474747',
        'secondary': '#AD343E',
        'dark': '#182226',
        'light': '#DBDFD0'
      },
      backgroundImage: {
       'phone-icon': "url('/src/assets/images/icons/phone.svg')",
       'mail-icon': "url('/src/assets/images/icons/mail.svg')",
       'hero-img': "url('/src/assets/images/hero-image.png')",
      },
      borderWidth: {
        '2': '1.5px'
      },
      borderRadius: {
        'medium': '2.125rem',
        'large': '7.375rem',
      },
      borderColor: {
        'dark': '#2C2F24',
        'red': '#AD343E',
        'light': '#DBDFD0'
      },
      spacing: {
        '108': '33rem',
        '120': '41rem',
        '132': '25.68rem',
        '144': '47rem',
        '156': '81rem'
      },
      maxWidth: {
        '50': '50%',
        '80': '80%'
      }
    }
  },
  plugins: [],
}

