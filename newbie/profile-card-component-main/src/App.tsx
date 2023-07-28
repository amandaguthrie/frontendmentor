import {
    Center,
    Card,
    Image,
    Text,
    Divider,
    Stack,
    StatLabel,
    Stat,
    StatNumber
} from "@chakra-ui/react";

function App() {
    const colorDarkGray = 'hsl(0, 0%, 59%)'
    const colorDarkGrayBlue = 'hsl(227, 10%, 46%)'
    const colorDarkBlue = 'hsl(229, 23%, 23%)'

    const stats = [
        {
            label: 'Followers',
            number: '80K'
        },
        {
            label: 'Likes',
            number: '803K',
        },
        {
            label: 'Photos',
            number: '1.4K'
        }
    ]
    return (
        <>
            <Center minHeight='100vh'>
                <Card
                    size='lg'
                    variant='filled'
                    minHeight='375px'
                    minWidth={{base: '330px', lg: '350px'}}
                    maxWidth={{base: '330px', lg: '350px'}}
                    padding={0}
                    margin={0}
                    bg={'url("./bg-pattern-card.svg") top center / 350px 140px no-repeat #FFFFFF'}
                    alignItems='center'
                    color={colorDarkGrayBlue}
                >
                    <Image src='./image-victor.jpg' alt='Victor Crest profile photo' marginTop='90px' boxSize='100px'
                           borderWidth='5px' borderColor='white' borderStyle='solid' rounded='full' alignSelf='center'/>
                    <Text as='h1' fontSize='18px' lineHeight='taller' marginTop='15px' fontWeight='regular'><Text
                        as='span' fontWeight='bold' color={colorDarkBlue} marginEnd='10px'>Victor Crest</Text>26</Text>
                    <Text fontSize='14px' marginBottom='25px'>London</Text>
                    <Divider color={colorDarkGray} opacity={'0.25'} marginBottom='25px'/>
                    <Stack direction='row' textAlign='center'
                           minWidth='100%' marginBottom='25px' paddingX='25px'>
                        {stats.map((stat) => (
                            <Stat>
                                <StatNumber fontSize='18px' fontWeight='bold'
                                            color={colorDarkBlue}>{stat.number}</StatNumber>
                                <StatLabel fontSize='11px' fontWeight='regular' color={colorDarkGrayBlue}
                                           letterSpacing='1.5px'>{stat.label}</StatLabel>
                            </Stat>
                        ))}
                    </Stack>
                </Card>

            </Center>
        </>
    )
}

export default App
