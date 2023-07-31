import {Card, Heading, Link, Stack, Text,} from "@chakra-ui/react";

type PopularCourseGridItemProps = {
    title: string,
    description: string,
    iconUrl: string
}

function PopularCourseGridItem(props: PopularCourseGridItemProps) {
    const {title, description, iconUrl} = props
    return (
        <Card variant='elevated'
              borderRadius={{base: '10px', lg: '15px'}}
              height={{base: 'calc(283px - 24px)', md: 'calc(346px - 24px)'}}
              maxHeight={{base: 'calc(283px - 24px)', md: 'calc(346px - 24px)'}}
              maxWidth={{base: 'none', md: '44vw', lg: '20rem'}}
              marginTop='24px'
              shadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
              _before={{
                  content: '""',
                  bgImage: `url('${iconUrl}')`,
                  bgRepeat: 'no-repeat',
                  bgPosition: 'top left 28px',
                  marginTop: '-24px',
                  minHeight: '56px',
                  minWidth: '56px',
                  display: 'block'
              }}
        >
            <Stack direction='column'
                   gap={{base: '1.5rem'}}
                   paddingTop={{base: '1rem', md: '1.94rem'}}
                   paddingX={{base: '1.75rem', lg: '2rem'}}
                   paddingBottom={{base: '2.75rem', lg: '2.75rem'}}
                   height='full'
                   justifyContent={{base: 'start', md: 'space-between'}}
            >
                <Stack direction='column'
                       gap={{base: '1rem'}}
                       height='full'
                       justifyContent={{md: 'space-around'}}
                >
                    <Heading size='sm'>
                        {title}
                    </Heading>
                    <Text textStyle={{base: 'smallText'}} fontWeight='medium' lineHeight='26px'
                          color='desaturatedPurple.500'>
                        {description}
                    </Text>
                </Stack>
                <Link href="#"
                      textStyle='mediumText'
                      fontWeight='bold'
                      color='brightPink.500'
                      _hover={{
                          color: 'brightPink.500',
                          textDecoration: 'none',
                          opacity: '0.5'
                      }}
                >
                    Get Started
                </Link>
            </Stack>

        </Card>
    );
}

export default PopularCourseGridItem;