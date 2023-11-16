/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
        'darkGray': '#737865',
        'mediumGray': '#ADB29E'
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
       'taste-img': "url('/src/assets/images/feel-the-taste.jpg')",

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
        'light': '#DBDFD0',
        'light70opacity': 'rgba(219, 223, 208, .7)',
        'customWhite': '#F9F9F7'
      },
      spacing: {
        '108': '33rem',
        '120': '41rem',
        '132': '25.68rem',
        '144': '47rem',
        '156': '81rem',
      },
      flexBasis: {
        '45': '45%',
        '50': '50%',
        '65': '65%',
      },
      maxWidth: {
        '50': '50%',
        '80': '80%'
      },
      boxShadow: {
        'customShadow': '0px 2.97872px 59.57446px 0px rgba(0, 0, 0, 0.08)'
      },
      transitionDelay: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceUp: {
          '0%': {
            transform: 'translateY(50%)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-10%)',
            opacity: '.5'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        enterTop: {
          '0%': {
            transform: 'translateY(-25%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        enterLeft: {
          '0%': {
            transform: 'translateX(-50%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        enterRight: {
          '0%': {
            transform: 'translateX(50%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        }, 
        rotate360: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        scale: {
          '0%': {
            transform: 'scale(1)',
          },
          '25%': {
            transform: 'scale(1.05)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '75%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          }
        },
        scaleRotate: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
          },
          '50%': {
            transform: 'scale(1.05) rotate(5deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(0deg)',
          }
        },
        shake: {
          '0%': {
            transform: 'rotateZ(0deg)'
          },
          '25%': {
            transform: 'rotateZ(70deg)'
          },
          '50%': {
            transform: 'rotateZ(0deg)'
          },
          '75%': {
            transform: 'rotateZ(70deg)'
          },
          '100%': {
            transform: 'rotateZ(0deg)'
          },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 2s',
        'bounceUp': 'bounceUp 1s',
        'enterTop': 'enterTop 1s',
        'enterLeft': 'enterLeft 1s',
        'enterRight': 'enterRight 1s',
        'rotate360': 'rotate360 1s',
        'scale': 'scale 1s',
        'scaleRotate': 'scaleRotate 1s',
        'shake': 'shake .5s'
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}

