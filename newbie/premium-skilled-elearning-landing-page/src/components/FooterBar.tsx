import {Button, Image, Stack} from "@chakra-ui/react";
import BaseStack from "./common/BaseStack.tsx";

function FooterBar() {
    return (
        <BaseStack bgColor='dustyPurple.900'
                   color='white'
                   alignItems='center'
                   paddingY={{base: '1rem', md: '1.5rem', '2xl': '2.5rem'}}
        >
            <Stack direction='row'
                   width='full'
                   alignItems='center'
                   justifyContent='space-between'
                   maxWidth={{lg: '63.875rem'}}
                   maxHeight={{base: '3rem', lg: '3.5rem'}}
            >
                <Image src='/logo-light.svg'
                       objectFit='contain'
                       maxHeight={{lg: '1.75rem'}}
                       maxWidth={{base: '5.5625rem', lg: '7.125rem'}}

                />

                <Button variant='purplePinkGradient'
                        minHeight={{base: '100%'}}
                        maxWidth={{base: '8.75rem', lg: '10.4375rem'}}
                >
                    Get Started
                </Button>
            </Stack>


        </BaseStack>
    );
}

export default FooterBar;