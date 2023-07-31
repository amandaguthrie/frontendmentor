import {Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Stack, Text} from "@chakra-ui/react";

function PreviewStylesPage() {
    const colors = [
        {
            hex: '#666CA3',
            rgb: 'rgb(102, 108, 163)',
            hsl: 'hsl(234, 25%, 52%)',
            themeKey: 'dustyPurple.500',
            contrastColor: 'white'
        },
        {
            hex: '#13183F',
            rgb: 'rgb(19, 24, 63)',
            hsl: 'hsl(233, 54%, 16%)',
            themeKey: 'dustyPurple.900',
            contrastColor: 'white'
        },
        {
            hex: '#83869A',
            rgb: 'rgb(131, 134, 154)',
            hsl: 'hsl(232, 10%, 56%)',
            themeKey: 'desaturatedPurple.500',
            contrastColor: 'white'
        },
        {
            hex: '#F74780',
            rgb: 'rgb(247, 71, 128)',
            hsl: 'hsl(341, 92%, 62%)',
            themeKey: 'brightPink.500',
            contrastColor: 'white'
        },
        {
            hex: '#FFA7C3',
            rgb: 'rgb(255, 167, 195)',
            hsl: 'hsl(341, 100%, 83%)',
            themeKey: 'brightPink.200',
            contrastColor: 'black'
        },
        {
            hex: '#FFFFFF',
            rgb: 'rgb(255, 255, 255)',
            hsl: 'hsl(0, 0%, 100%)',
            themeKey: 'white',
            contrastColor: 'black'
        }
    ]

    const gradients = [
        {
            hex: '#F02AA6 - #FF6F48',
            rgb: 'rgb(240, 42, 166), rgb(255, 111, 72)',
            hsl: 'hsl(322, 87%, 55%), hsl(13, 100%, 64%)',
            gradient: 'linear(0deg, #F02AA6, #FF6F48)',
            layerStyle: 'orangePinkGradient',
            contrastColor: 'white'
        },
        {
            hex: '#4851FF - #F02AA6',
            rgb: 'rgb(72, 81, 255), rgb(240, 42, 166)',
            hsl: 'hsl(237, 100%, 64%), hsl(322, 87%, 55%)',
            gradient: 'linear(180deg, #4851FF, #F02AA6)',
            layerStyle: 'purplePinkGradient',
            contrastColor: 'white'
        }
    ]
    return (
        <Flex direction='column'
              alignItems='center'
              minHeight='100vh'
              margin='4rem'
        >
            <Heading size='md'>Color</Heading>
            <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
            <Flex direction='row' wrap='wrap' gap='4rem'>
                {colors.map((color) => (
                    <Card size='md' minHeight='5vh' bgColor={color.themeKey}
                          color={color.contrastColor}
                          fontWeight='bold'
                          minWidth='20%'
                          maxWidth='20%'
                    >
                        <CardHeader>
                            {color.hex}
                        </CardHeader>
                        <CardBody bgColor='white' color='dustyPurple.900' padding='0.5rem'>
                            <Text fontSize='12px' fontWeight='medium' lineHeight='1.1rem'>{color.rgb}<br/>
                                {color.hsl}<br/>
                                {color.themeKey}
                            </Text>
                        </CardBody>
                    </Card>
                ))}
                {gradients.map((gradient) => (
                    <Card size='md'
                          minHeight='5vh'
                          layerStyle={gradient.layerStyle}
                          color={gradient.contrastColor}
                          fontWeight='bold'
                          minWidth='20%'
                          maxWidth='20%'
                    >
                        <CardHeader>
                            {gradient.hex}
                        </CardHeader>
                        <CardBody bgColor='white' color='dustyPurple.900' padding='0.5rem'>
                            <Text fontSize='12px' fontWeight='medium' lineHeight='1.1rem'>{gradient.rgb}<br/>
                                {gradient.hsl}<br/>
                                {gradient.layerStyle}
                            </Text>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
            <Heading size='md' marginTop='4rem'>Typography</Heading>
            <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
            <Stack direction='row' gap='4rem'>
                <Flex direction='column' minWidth='50%'>

                    <Text textStyle='smallText' color='desaturatedPurple.500'>Heading XL &nbsp;//&nbsp; Plus Jakarta
                        Sans Extra Bold &nbsp;//&nbsp; Size 56px &nbsp;//&nbsp; Line 70px</Text>
                    <Heading size='xl'>Increase your skill with minimal budget</Heading>
                    <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
                    <Text textStyle='smallText' color='desaturatedPurple.500'>Heading L &nbsp;//&nbsp; Plus Jakarta Sans
                        Extra Bold &nbsp;//&nbsp; Size 40px &nbsp;//&nbsp; Line 51px</Text>
                    <Heading size='lg'>Users all around the globe</Heading>
                    <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
                    <Text textStyle='smallText' color='desaturatedPurple.500'>Heading M &nbsp;//&nbsp; Plus Jakarta Sans
                        Extra Bold &nbsp;//&nbsp; Size 32px &nbsp;//&nbsp; Line 40px</Text>
                    <Heading size='md'>Check out our most popular courses</Heading>
                    <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
                    <Text textStyle='smallText' color='desaturatedPurple.500'>Heading S &nbsp;//&nbsp; Plus Jakarta Sans
                        Extra Bold &nbsp;//&nbsp; Size 24px &nbsp;//&nbsp; Line 28px</Text>
                    <Heading size='sm'>Photography</Heading>
                </Flex>
                <Flex direction='column'>
                    <Text textStyle='smallText' color='desaturatedPurple.500'>Body M &nbsp;//&nbsp; Plus Jakarta Sans
                        Medium &nbsp;//&nbsp; Size 18px &nbsp;//&nbsp; Line 28px</Text>
                    <Text textStyle='mediumText'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                        mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis
                        fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec
                        justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</Text>
                    <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
                    <Text textStyle='smallText' color='desaturatedPurple.500'>Body S &nbsp;//&nbsp; Plus Jakarta Sans
                        Bold &nbsp;//&nbsp; Size 16px &nbsp;//&nbsp; Line 28px</Text>
                    <Text textStyle='smallText'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
                        sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis
                        fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec
                        justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</Text>
                </Flex>
            </Stack>
            <Heading size='md' marginTop='4rem'>Buttons</Heading>
            <Divider marginTop='0.5rem' marginBottom='0.5rem'/>
            <Stack direction='row' gap='0.5rem'>
                <Button variant='darkPurple'>Theme Button</Button>
                <Button variant='orangePinkGradient'>Theme Button</Button>
                <Button variant='purplePinkGradient'>Theme Button</Button>
            </Stack>

        </Flex>
    );
}

export default PreviewStylesPage;