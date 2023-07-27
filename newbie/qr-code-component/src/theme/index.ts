import {extendTheme} from '@chakra-ui/react';

export const myTheme = extendTheme({
    colors: {
        blueGray: {
            '100': '#F8FCFE',
            '200': '#F2F8FD',
            '300': '#E9F2FA',
            '400': '#E1EBF5',
            '500': 'hsl(212, 45%, 89%)',
            '600': '#9BB0CD',
            '700': '#6B83AC',
            '800': '#435A8A',
            '900': '#283D72'
        }
    },
    fonts: {
        heading: `'Outfit', sans-serif`,
        body: `'Outfit', sans-serif`
    },
    styles: {
        global: {
            body: {
                bgColor: 'blueGray.500'
            }
        }
    }
})