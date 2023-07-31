import {defineStyleConfig} from '@chakra-ui/react';

const purplePinkGradient: string = 'linear(180deg, #4851FF 0%, #F02AA6 100%)'
const orangePinkGradient: string = 'linear(0deg, #F02AA6 0%, #FF6F48 100%)'
export const Button = defineStyleConfig({
    defaultProps: {
        colorScheme: 'dustyPurple',
        size: 'lg'
    },
    baseStyle: {
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: '1.75rem',
        borderRadius: '1.75rem',
        borderWidth: '0',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    variants: {
        darkPurple: {
            colorScheme: 'dustyPurple',
            fontSize: 'md',
            bg: 'dustyPurple.900',
            color: 'white',
            _hover: {
                bg: 'dustyPurple.500',
            }
        },
        orangePinkGradient: {
            bgGradient: orangePinkGradient,
            bgColor: 'white',
            color: 'white',
            _hover: {
                bg: 'linear-gradient(0deg, rgba(240, 42, 166, 0.5) 0%, rgba(255, 111, 72, 0.5) 100%) rgba(255, 255, 255, 1)'
            }
        },
        purplePinkGradient: {
            bgGradient: purplePinkGradient,
            bgColor: 'white',
            color: 'white',
            _hover: {
                bg: 'linear-gradient(180deg, rgba(72, 81, 255, 0.5) 0%, rgba(240, 42, 166, 0.5) 100%) rgba(255, 255, 255, 1)'
            }


        }
    }
})