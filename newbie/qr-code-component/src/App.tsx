import {
    AspectRatio,
    Card,
    CardBody,
    Center,
    Heading,
    Image,
    LinkOverlay,
    Text
} from "@chakra-ui/react";

function App() {
    return (
        <>
            <Center as='main' minHeight='100vh' paddingX={{base: '10vw', sm: '10vw', md: '20vw', lg: '37vw'}}>
                <Card as='section'
                      variant='filled'
                      bgColor='white'
                      shadow='sm'
                      minH='auto'
                      minW='full'
                      size='lg'
                      paddingX='5vw'
                      paddingY='5vw'
                      borderRadius='var(--chakra-radii-3xl)'>
                    <AspectRatio ratio={1} minWidth='100%' minHeight='100%'>
                        <LinkOverlay href='https://frontendmentor.io' isExternal>
                            <Image src='./image-qr-code.png' alt='Frontend Mentor Website'
                                   borderRadius='var(--chakra-radii-2xl)' minWidth='100%'/>
                        </LinkOverlay>
                    </AspectRatio>
                    <CardBody textAlign='center'>
                        <Heading as='h1' fontSize={{base: 'xl'}} paddingBottom='var(--chakra-space-7)'>
                            Improve your front-end skills by building projects
                        </Heading>
                        <Text color='hsl(220, 15%, 55%)' lineHeight='shorter'>
                            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                        </Text>

                    </CardBody>
                </Card>
            </Center>
        </>
    )
}

export default App
