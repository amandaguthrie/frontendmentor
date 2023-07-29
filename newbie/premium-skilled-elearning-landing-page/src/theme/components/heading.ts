import {defineStyleConfig} from '@chakra-ui/react';

export const Heading = defineStyleConfig({
    baseStyle: {

    },
    sizes: {
        sm: {
            fontSize: '1.5rem', // 24px
            fontWeight: 'extrabold',
            lineHeight: '2.375rem' // 28px
        },
        md: {
            fontSize: '2rem', // 32px
            fontWeight: 'extrabold',
            lineHeight: '2.5rem' // 40px
        },
        lg: {
            fontSize: '2.5rem', // 40px
            fontWeight: 'extrabold',
            lineHeight: '3.188rem' // 51px
        },
        xl: {
            fontSize: '3.5rem', // 56px
            fontWeight: 'extrabold',
            lineHeight: '4.375rem' // 70px
        }

    },
    variants: {

    }
})