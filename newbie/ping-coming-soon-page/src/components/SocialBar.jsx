import React from 'react';
import {
  IconButton, Stack, Text,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialBar() {
  const socialLinks = [
    {
      network: 'Facebook',
      icon: <FaFacebookF />,
      url: '#',
    },
    {
      network: 'Twitter',
      icon: <FaTwitter />,
      url: '#',
    },
    {
      network: 'Instagram',
      icon: <FaInstagram />,
      url: '#',
    },
  ];
  return (
    <Stack
      direction="column"
      gap={{ base: '1.6875rem', md: '1.5625rem' }}
      alignItems="center"
      marginTop={{ base: '6.5rem', md: 'auto' }}
      paddingBottom={{ base: '2.31rem', md: '3rem' }}
    >
      <Stack
        direction="row"
        gap="0.78rem"
      >
        {socialLinks.map((network) => (
          <IconButton
            aria-label={network.network}
            bgColor="transparent"
            borderColor="borderColor"
            borderWidth="1px"
            color="brand.blue"
            href={network.url}
            icon={network.icon}
            isRound
            key={network.network}
            size="sm"
            _hover={{
              bgColor: 'brand.blue',
              borderColor: 'brand.blue',
              color: 'white',
            }}
          />
        ))}
      </Stack>
      <Text
        as="footer"
        color="brand.darkGray"
        fontSize="0.75rem"
        fontWeight="300"
      >
        &copy; Copyright Ping. All rights reserved.
      </Text>
    </Stack>
  );
}

export default SocialBar;
