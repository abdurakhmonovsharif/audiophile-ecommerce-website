/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },

      fontSize: {
        h1: [
          '56px',
          {
            lineHeight: '58px',
            letterSpacing: '2px',
            fontWeight: '700',
          },
        ],
        'h1-mobile': [
          '36px',
          {
            lineHeight: '40px',
            letterSpacing: '1.29px',
            fontWeight: '700',
          },
        ],
        h2: [
          '40px',
          {
            lineHeight: '44px',
            letterSpacing: '1.43px',
            fontWeight: '700',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '36x',
            letterSpacing: '1.14px',
            fontWeight: '700',
          },
        ],
        h4: [
          '28px',
          {
            lineHeight: '38.25px',
            letterSpacing: '2px',
            fontWeight: '700',
          },
        ],
        h5: [
          '24px',
          {
            lineHeight: '32.78px',
            letterSpacing: '1.71px',
            fontWeight: '700',
          },
        ],
        h6: [
          '18px',
          {
            lineHeight: '24.59px',
            letterSpacing: '1.29px',
            fontWeight: '700',
          },
        ],
        body: [
          '15px',
          {
            lineHeight: '25px',
            fontWeight: '500',
          },
        ],
        mobileMenu: [
          '15px',
          {
            lineHeight: '20.49px',
            letterSpacing: '1.07px',
            fontWeight: '700',
          },
        ],
        subtitle: [
          '13px',
          {
            lineHeight: '17.76px',
            letterSpacing: '1px',
            fontWeight: '700',
          },
        ],
        newProduct: [
          '14px',
          {
            lineHeight: '19.12px',
            letterSpacing: '10px',
            fontWeight: '400',
          },
        ],
      },

      colors: {
        brightOrange: '#D87D4A',
        brightOrangeHover: '#FBAF85',
        jetBlack: '#101010',
        paleSilver: '#F1F1F1',
        snow: '#FAFAFA',
        peach: '#FBAF85',
        pureWhite: '#FFFFFF',
        pureBlack: '#000000',
        gray: '#808080',
        lightGray: '#bfbfbf',
        paleGray: '#F2F2F2',
        silver: '#CFCFCF',
        error: '#CD2C2C',
      },

      backgroundImage: {
        heroMobile: 'url(/assets/home/mobile/image-header.jpg)',
        heroTablet: 'url(/assets/home/tablet/image-header.jpg)',
        heroDesktop: 'url(/assets/home/desktop/image-hero.jpg)',
        patternCircles: 'url(/assets/home/desktop/pattern-circles.svg)',
        'zx7-mobile': 'url(/assets/home/mobile/image-speaker-zx7.jpg)',
        'zx7-tablet': 'url(/assets/home/tablet/image-speaker-zx7.jpg)',
        'zx7-desktop': 'url(/assets/home/desktop/image-speaker-zx7.jpg)',
        'yx1-mobile': 'url(/assets/home/mobile/image-earphones-yx1.jpg)',
        'yx1-tablet': 'url(/assets/home/tablet/image-earphones-yx1.jpg)',
        'yx1-desktop': 'url(/assets/home/desktop/image-earphones-yx1.jpg)',
        'zx-9-desktop': 'url(/assets/home/desktop/image-speaker-zx9.png)',
      },
    },
  },
  plugins: [],
};
