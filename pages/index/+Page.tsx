import React from 'react';

import {Box, Flex} from '@chakra-ui/react';
import {LoginForm} from '#root/components/LoginForm';

export default function Page() {
  return (
    <Box
      p={8}
      mx="auto"
      w="293px"
      bg="white"
      rounded="lg"
      shadow="md"
      overflow="hidden"
    >
      <Box textAlign="center">
        <h1>Login</h1>
      </Box>
      <LoginForm />
    </Box>
  );
}
