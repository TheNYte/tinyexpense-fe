import React from 'react';

import {Box, Flex, Image} from '@chakra-ui/react';
import {LoginForm} from '#root/components/LoginForm';

export default function Page() {
  return (
    <>
      <Box w="293px" m={8} h={'120px'} borderRadius={'lg'} overflow={'hidden'}>
        <Flex h="100%" alignItems="center" justifyContent="center">
          <Image src={'/public/logo.png'} />
        </Flex>
      </Box>
      <Box
        mx="auto"
        w="293px"
        bg="white"
        rounded="lg"
        shadow="md"
        display={'flex'}
        flexDir={'column'}
        overflow="hidden"
        gap={4}
      >
        <LoginForm />
      </Box>
    </>
  );
}
