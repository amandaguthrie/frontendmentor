import React from 'react';
import {Stack, StackProps} from "@chakra-ui/react";

const BaseStack: React.FC<StackProps> = (props) => {
    const {children, ...rest} = props;
    return (
        <Stack paddingX={{base: '1rem', md: '2.4375rem', lg: 'none'}}
               marginX={{base: 'auto'}}
               width='full'
               {...rest}
        >
            {children}
        </Stack>
    );
}

export default BaseStack;