import {extendTheme} from '@chakra-ui/react'
import '@fontsource-variable/montserrat'
import '@fontsource-variable/fraunces'

export const myTheme = extendTheme({
    breakpoints: {
        base: '0em',
        sm: '375px',
        md: '640px',
        lg: '800px',
        xl: '1440px',
        '2xl': '1600px'
    },
    fonts: {
        heading: `'Fraunces Variable', serif`,
        body: `'Montserrat Variable', sans-serif`
    },
    styles: {
        global: {
            body: {
                bgColor: 'hsl(30, 38%, 92%)',


            },
            ':where(h1, h2, h3, h4, h5, h6)': {
                color: 'hsl(212, 21%, 14%)'
            },
            'p': {
                color: 'hsl(228, 12%, 48%)',
                fontSize: '14px',
                fontWeight: 'medium'
            }
        }
    }
})