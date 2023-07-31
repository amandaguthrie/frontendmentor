import React from 'react';
import {
  Flex, Heading, Highlight, Image,
} from '@chakra-ui/react';
import FormSubscribe from '../components/FormSubscribe';
import SocialBar from '../components/SocialBar';

function HomePage() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="1rem"
      height="100vh"
      justifyContent="space-between"
      paddingX={{ base: '2.5rem' }}
      marginX={{ base: 'auto' }}
      width="full"
      maxWidth={{ base: '20rem', sm: '40rem', md: '44.5rem' }}
    >
      <Image
        src="/logo.svg"
        alt="Ping logo"
        objectFit="contain"
        width={{ base: 'auto' }}
        height="full"
        marginTop="5rem"
        marginBottom={{ base: '1rem', md: '1.5rem' }}
        maxHeight={{ base: '1.5rem', md: '2.4375rem' }}
        maxWidth={{ base: '3.5rem', md: '5.625rem' }}
      />
      <Heading
        as="h1"
        color="brand.darkGray"
        fontSize={{ base: '1.375rem', md: '3rem' }}
        fontWeight="300"
        lineHeight={{ base: '2rem', md: '3.75rem' }}
        textAlign="center"
        width="full"
      >
        <Highlight query="soon!" styles={{ color: 'brand.nearlyBlack', fontWeight: 'bold' }}>
          We are launching soon!
        </Highlight>
      </Heading>
      <FormSubscribe />
      <Image
        src="./illustration-dashboard.png"
        alt="An illustration of a dashboard containing four graphs in a browser."
        marginTop={{ base: '3.5rem' }}
        height={{ base: '12rem', md: 'auto' }}
        maxWidth={{ base: '20rem', sm: '35rem', md: '40rem' }}
        flexShrink
      />
      <SocialBar />
    </Flex>

  );
}

export default HomePage;
