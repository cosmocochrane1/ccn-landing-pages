module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      secondaryText: '#697386',
      columnColor: '#1a1f36',
      orange: `#FE7611`,
      green: `#7BD0A3`,
      blue: `#00317F`,
      black: '#1f1f30',
      lightBlack: `#171717`,
      lighterBlack: `#B9B9B9`,
      landingPageTextGrey: '#737373',
      landingPageGrey: '#F9F9F9',
      darkBlue: `#031C45`,
      white: '#ffffff',
      purple: 'rgb(84, 105, 212)',
      darkGrey: `#5B697C`,
      lightGrey: `#F0F3F4`,
    },
    boxShadow: {
      materialDropShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cardShadow: '0 0px 0px 0 rgba(60,66,87, 0.12), 0 3px 6px 0 rgba(0,0,0, 0.12)',
      darkCardShadow: '0 0px 0px 0 rgba(60,66,87, 0.12), 0 3px 6px 0 rgba(0,0,0, 0.22)',
      buttonShadow:
        'rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.12) 0px 1px 1px 0px, rgba(60,66,87,0.16) 0px 0px 0px 1px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(60,66,87,0.12) 0px 2px 5px 0px',
      buttonHoverState:
        'rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.12) 0px 1px 1px 0px, rgba(60,66,87,0.16) 0px 0px 0px 1px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(60,66,87,0.12) 0px 3px 9px, rgba(60,66,87,0.12) 0px 2px 5px 0px',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      messageHoverState: '0 0px 0px 0 rgba(60,66,87, 0.12), 0 3px 6px 0 rgba(0,1,1, 0.32)',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    fontFamily: {
      inter: ['inter'],
      nunito: ['Nunito Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      11: '10px',
      1: '12px',
      2: '14px',
      3: '18px',
      4: '20px',
      5: '24px',
      6: '30px',
      7: '36px',
      8: '48px',
      9: '60px',
      10: '72px',
      12: '80px'
    },
    spacing: {
      11: '-8px',
      12: '-4px',
      13: '-6px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '96px',
      10: '128px',
    },
    variants: {},
  },
};
