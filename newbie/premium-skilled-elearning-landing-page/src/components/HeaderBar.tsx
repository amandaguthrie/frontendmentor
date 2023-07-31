import {Button, Image, Stack} from "@chakra-ui/react";
import BaseStack from "./common/BaseStack.tsx";

function HeaderBar() {
    return (
        <BaseStack as="nav"
                   bgColor='transparent'
                   color='white'
                   alignItems='center'
                   maxWidth={{lg: '68.75rem'}}
                   paddingTop={{base: '1rem', md: '1.5rem', lg: '2.4375rem'}}
        >
            <Stack direction='row'
                   width='full'
                   alignItems='center'
                   justifyContent='space-between'
                   maxWidth={{lg: '63.875rem'}}
                   maxHeight={{base: '3rem', lg: '3.5rem'}}
            >
                <Image src='/logo-dark.svg'
                       objectFit='contain'
                       maxHeight={{lg: '1.75rem'}}
                       maxWidth={{base: '5.5625rem', lg: '7.125rem'}}
                       alt="Skilled Logo"

                />

                <Button variant='darkPurple'
                        minHeight={{base: '100%'}}
                        minWidth='4rem'
                        maxWidth={{base: '8.75rem', lg: '10.4375rem'}}
                >
                    Get Started
                </Button>
            </Stack>
        </BaseStack>
    );
}

export default HeaderBar;