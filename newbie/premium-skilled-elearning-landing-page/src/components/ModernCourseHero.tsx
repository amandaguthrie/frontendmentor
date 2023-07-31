import {Button, Heading, Image, Stack, Text, VisuallyHidden} from "@chakra-ui/react";
import BaseStack from "./common/BaseStack.tsx";

function ModernCourseHero() {
    return (
        <BaseStack as='section'
                   id='modern-course-hero'
                   aria-labelledby='modern-course-hero-heading'
                   direction={{base: 'column'}}
                   marginTop={{base: '2.3125rem', md: '6.1875rem', lg: '11.625rem'}}
                   maxHeight={{base: 'calc(50rem - 3rem - 2.3125rem)', md: 'calc(40.0625rem - 3.5rem - 6.1875rem)', lg: 'calc(49.5625rem - 11.625rem)'}}
                   alignItems={{lg: 'center'}}
        >
            <Stack direction={{base: 'column', md: 'row'}}
                   width='full'
                   maxWidth={{lg: '63.875rem'}}
            >

                <Stack direction='column'
                       gap='1.5rem'
                       width='full'
                       paddingY={0}
                       maxWidth={{md: '55vw', lg: '40%'}}
                >
                    <Heading id='modern-course-hero-heading' as='h1' size='lg' >
                        Maximize skill, minimize budget
                    </Heading>
                    <Text textStyle='mediumText' color='desaturatedPurple.500'>Our modern courses across a range of
                        in-demand skills will give you the knowledge you need to live the life you want.</Text>
                    <VisuallyHidden><Text>We have 29,000 members and over 1,451 course hours
                        completed.</Text></VisuallyHidden>
                    <Button variant='orangePinkGradient'
                            maxHeight={{base: '3.5rem'}}
                            maxWidth={{base: '10.4375rem'}}
                            marginBottom={{base: '2.875rem', md: '11.625rem'}}
                    >
                        Get Started
                    </Button>
                </Stack>
                <Stack direction='column'
                       marginX={{base: '-2.4375rem'}}
                >
                    <Image src='/image-hero-mobile.png'
                           alt='29k members, 1451 course hours'
                           display={{base: 'flex', md: 'none'}}
                           objectFit='contain'
                           objectPosition='center'
                           width='full'
                    />
                </Stack>
            </Stack>
        </BaseStack>
    );
}

export default ModernCourseHero;