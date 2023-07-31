import {Card, Heading, Stack} from "@chakra-ui/react";
import popularCourseGridData from "../data/PopularCourseGridData.ts";
import PopularCourseGridItem from "./PopularCourseGridItem.tsx";
import BaseStack from "./common/BaseStack.tsx";

function PopularCourseGrid() {
    return (
        <BaseStack direction={{base: 'column', md: 'row'}}
                   wrap='wrap'
                   columnGap={{base: '1rem', md: '0.625rem', lg: '1.875rem'}}
                   rowGap={{base: '1rem', md: '2rem', lg: '3.5rem'}}
                   maxWidth={{lg: '68.75rem'}}
                   minHeight={{base: '105.9375rem', md: '62.4375rem', lg: '55.5rem'}}
                   marginBottom={{base: '5rem'}}

        >
            <Card variant='elevated'
                  borderRadius={{base: '0.625rem', xl: '0.9375rem'}}
                  maxHeight={{base: '7.5rem', md: '21.625rem', lg: '20.125rem'}}
                  maxWidth={{base: 'none', md: '44vw', lg: '20rem'}}
                  marginTop='1.5rem'
                  shadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                  layerStyle='orangePinkGradient'>
                <Stack direction='column'
                       paddingTop={{base: '1rem', md: '4rem'}}
                       paddingX={{base: '1.75rem', xl: '2rem'}}
                       marginBottom={{base: '1.5rem'}}
                       gap={{base: '1rem', xl: '2rem'}}
                >
                    <Heading size={{base: 'sm', xl: 'md'}} color='white'>
                    Check out our most popular courses!
                    </Heading>
                </Stack>
            </Card>
            {popularCourseGridData.map((course) => (
                <PopularCourseGridItem {...course} />
            ))}
        </BaseStack>
    );
}

export default PopularCourseGrid;