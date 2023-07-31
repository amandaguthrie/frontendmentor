import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/libre-franklin';

const myTheme = extendTheme({
  breakpoints: {
  // Bootstrap breakpoints
    sm: '36rem', // >= 576px
    md: '48rem', // >=768px
    lg: '62rem', // >= 992px
    xl: '75rem', // >= 1200px
    '2xl': '87.5rem', // >= 1400px
  },
  colors: {
    red: {
      500: '#FF5466',
    },
    brand: {
      background: '#FFFFFF',
      borderColor: '#C2D3FF',
      blue: '#4C7BF3',
      darkGray: '#969696',
      error: 'red.500',
      gray: '#CAD3DB',
      nearlyBlack: '#15202A',
      placeholderColor: '#B8C7ED',
    },
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: 'brand.borderColor',
            borderRadius: '1.75rem',
            borderWidth: '1px',
            fontSize: { base: '0.75rem', md: '1rem' },
            height: { base: '2.5rem', md: '3.5rem' },
            lineHeight: { base: 'normal', md: '2.5rem' },
            paddingX: '2rem',
            shadow: 'none',
            _invalid: {
              borderWidth: '1px',
              shadow: 'none',
            },
            _placeholder: {
              color: 'brand.placeholderColor',
            },
          },
        },
      },
    },
  },
  fonts: {
    heading: '"Libre Franklin Variable", sans-serif',
    body: '"Libre Franklin Variable", sans-serif',
  },
  styles: {
    global: {
      body: {
        bgColor: 'brand.background',
        paddingX: { base: 'max(2.25rem, auto)', md: '' },
        paddingTop: { base: 'max(5rem, auto)', md: '' },
        paddingBottom: { base: 'max(2.5rem, auto)', md: '' },
        minHeight: '100vh',
      },
    },
  },
});

export default myTheme;
