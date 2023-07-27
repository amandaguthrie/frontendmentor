import {
    Card,
    CardBody,
    Center,
    Heading,
    Image,
    Link,
    Text,
    VisuallyHidden
} from "@chakra-ui/react";

function App() {
    const cardPadding: string = '20px';
    const footerHeight: string = '21px'
    return (
        <>
            <Center minHeight='100vh' paddingBottom={footerHeight}>
                <Card as='main'
                      variant='filled'
                      bgColor='white'
                      shadow='sm'
                      minH='auto'
                      minW='320px' // Measured from .jpg
                      maxW='320px' // Measured from .jpg
                      size='lg'
                      padding='15px' // Measured from .jpg
                      borderRadius='var(--chakra-radii-3xl)'>
                    <VisuallyHidden
                        className='screen-reader-only' // Visually hidden link to replace QR code functionality for screen reader users
                    >
                        <Link href='https://frontendmentor.io' isExternal>Visit the
                            FrontEnd mentor
                            website</Link>
                    </VisuallyHidden>
                    <Image src='./image-qr-code.png'
                           alt='Frontend Mentor Website'
                           borderRadius='var(--chakra-radii-2xl)'
                           aria-hidden='true' // Added aria-hidden to hide the QR code image from screen readers, provided alternative link above.
                    />
                    <CardBody as='article' textAlign='center' paddingX={cardPadding}>
                        <Heading as='h1' fontSize='22px' paddingBottom={cardPadding} color='black'>
                            Improve your front-end skills by building projects
                        </Heading>
                        <Text lineHeight='shorter' fontSize='15px' color='hsl(220, 15%, 55%)'>
                                <span aria-hidden="true">Scan the QR code to visit Frontend Mentor and take your
                                coding skills to the next level</span>
                            <VisuallyHidden className='screen-reader-only'>
                                <Link href='https://frontendmentor.io' isExternal>
                                    To visit Frontend Mentor and take your coding skills to the next level, click here.
                                </Link>
                            </VisuallyHidden>
                        </Text>
                    </CardBody>
                </Card>
                <Text as='footer' height={footerHeight} position='absolute' bottom='0' fontSize='xs' textAlign='center' verticalAlign='bottom'
                      color='blackAlpha.700' paddingBottom='5px'>Challenge
                    by <Link href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H/' isExternal>Frontend
                        Mentor</Link>. Coded by <Link href='https://github.com/amandaguthrie' isExternal>Amanda
                        Guthrie</Link>.</Text>
            </Center>

        </>
    )
}

export default App
