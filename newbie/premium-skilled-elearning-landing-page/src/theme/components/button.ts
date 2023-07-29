import {defineStyleConfig} from '@chakra-ui/react';

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
            layerStyle: 'orangePinkGradient',
            color: 'white',
            _hover: {
                layerStyle: 'orangePinkGradient',
                opacity: '0.5'
            }
        },
        purplePinkGradient: {
            layerStyle: 'purplePinkGradient',
            color: 'white',
            _hover: {
                layerStyle: 'purplePinkGradient',
                opacity: '0.5'
            }
        }
    }
})