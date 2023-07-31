import React, { useState } from 'react';
import {
  Button,
  FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, VisuallyHidden,
} from '@chakra-ui/react';
import isEmail from 'validator/lib/isEmail';

function FormSubscribe() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [invalidEmail, setInvalidEmail] = useState(false);

  const { email } = formData;

  const handleInputChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.id]: [evt.target.value],
    }));

    if (evt.target.id === 'email') {
      if (!isEmail(evt.target.value)) {
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    }
  };

  return (
    <Stack
      direction={{ base: 'column' }}
      alignItems="center"
      gap="1.5rem"
      width="full"
    >
      <Text
        as="h2"
        fontSize={{ base: '0.75rem', md: '1.25rem' }}
        fontWeight="300"
        paddingBottom={{ md: '1rem' }}
      >
        Subscribe and get notified
      </Text>
      <Stack
        as="form"
        id="email-subscribe"
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'start' }}
        columnGap={{ md: '1rem' }}
        rowGap={{ base: '0.6rem', md: '0px' }}
        width="full"
      >
        <FormControl isInvalid={invalidEmail}>
          <VisuallyHidden>
            <FormLabel id="email-label">Email</FormLabel>
          </VisuallyHidden>
          <Input
            id="email"
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={handleInputChange}
            flexGrow
            shrink="0"
            width="full"
          />
          {invalidEmail ? (
            <FormErrorMessage
              color="red.500"
              fontStyle="italic"
              fontSize={{ base: '0.625rem', md: '0.75rem' }}
              fontWeight="400"
              paddingBottom="0.65rem"
              paddingX={{ base: '2rem' }}
            >
              Please provide a valid email address
            </FormErrorMessage>
          ) : ''}

        </FormControl>
        <Button
          borderRadius="1.75rem"
          bgColor="brand.blue"
          color="white"
          fontSize={{ base: '0.75rem', md: '1rem' }}
          fontWeight="600"
          flexGrow
          height={{ base: '2.5rem', md: '3.5rem' }}
          lineHeight={{ base: '1rem', md: 'normal' }}
          width="full"
          maxWidth={{ md: '25%' }}
          isDisabled={invalidEmail}
          _hover={{
            bgColor: 'brand.blue',
            opacity: '0.8',
          }}
        >
          Notify Me
        </Button>
      </Stack>
    </Stack>
  );
}

export default FormSubscribe;
