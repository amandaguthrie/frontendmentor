import {extendTheme} from "@chakra-ui/react";
import '@fontsource-variable/kumbh-sans';

export const myTheme = extendTheme({
    fonts: {
        heading: `'Kumbh Sans Variable', sans-serif`,
        body: `'Kumbh Sans Variable', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: {
                    base: 'url("./bg-pattern-top.svg") -100vw -50vh / 160vw no-repeat, url("./bg-pattern-bottom.svg") 40vw 55vh / 160vw no-repeat hsl(185, 75%, 39%)',
                    md: 'url("./bg-pattern-top.svg") -50vw -40vh / 100vw no-repeat, url("./bg-pattern-bottom.svg") 40vw 55vh / 160vw no-repeat hsl(185, 75%, 39%)',
                    lg: 'url("./bg-pattern-top.svg") -20vw -65vh / 65vw 65vw no-repeat, url("./bg-pattern-bottom.svg") 40vw 50vh / 90vw 90vw no-repeat hsl(185, 75%, 39%)'
                },
                margin: {
                    base: '25px auto'
                },
                bgColor: 'hsl(185, 75%, 39%)',
                color: 'hsl(229, 23%, 23%)',
                borderColor: 'hsl(227, 10%, 46%)'
            },
        }
    }
});