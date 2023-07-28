import {Button, Card, CardBody, CardHeader, Center, Heading, Icon, Image, Stack, Text} from '@chakra-ui/react'
import {CustomCartIcon} from "./theme/icons.tsx";

function App() {

    const productData = {
        name: 'Gabrielle Essence Eau De Parfum',
        category: 'PERFUME',
        description: 'A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
        retailPrice: '$169.99',
        salePrice: '$149.99',
        featuredImageMobile: './image-product-mobile.jpg',
        featuredImageDesktop: './image-product-desktop.jpg',
        featuredImageAltText: 'A square perfume bottle labeled "Gabrielle Chanel" on a table with decorative leaves.'
    }

    const colors = {
        green: 'hsl(158, 36%, 37%)',
        darkGreen: 'hsl(156, 59%, 25%)'
    }

    return (
        <Center as='main' minHeight='100vh' marginX={{base: '15px'}}>
            <Card size='lg'
                  variant='outline'
                  direction={{base: 'column', lg: 'row'}}
                  alignItems={{base: 'start', lg: 'center'}}
                  overflow='hidden'
                  maxWidth={{base: '100vw', lg: '600px'}}
            >
                <CardHeader
                    margin={0}
                    padding={0}
                    maxWidth={{base: '100%', lg: '300px'}}
                >
                    <Image src={productData.featuredImageMobile}
                           objectPosition={{base: 'top left'}}
                           objectFit={'contain'}
                           display={{base: 'flex', lg: 'none'}}
                           alt={productData.featuredImageAltText}
                    />
                    <Image src={productData.featuredImageDesktop}
                           objectPosition={{base: 'top left'}}
                           objectFit={'contain'}
                           display={{base: 'none', lg: 'flex'}}
                           alt={productData.featuredImageAltText}
                    />
                </CardHeader>
                <CardBody padding='25px'>
                    <Text letterSpacing='6px'
                          fontSize='11px'
                          marginBottom='15px'
                    >
                        {productData.category}
                    </Text>
                    <Heading as='h1'
                             lineHeight='none'
                             marginBottom='25px'
                    >
                        {productData.name}
                    </Heading>
                    <Text>{productData.description}</Text>
                    <Stack direction='row'
                           alignItems='center'
                           marginTop='30px'
                           lineHeight='none'
                           marginBottom='20px'
                    >
                        <Text fontFamily='heading' fontSize='32px' fontWeight='bold'
                              color={colors.green}>{productData.salePrice}</Text>
                        <Text marginStart='10px' textDecoration='line-through'>{productData.retailPrice}</Text>
                    </Stack>
                    <Button bgColor={colors.green}
                            size='lg'
                            width={{base: '100%'}}
                            color='white'
                            fontSize='14px'
                            leftIcon={<Icon as={CustomCartIcon} color='white'/>}
                            textAlign='center'
                            _hover={{
                                bgColor: colors.darkGreen,
                            }}
                    >
                        Add to Cart
                    </Button>
                </CardBody>

            </Card>
        </Center>
    )
}

export default App
