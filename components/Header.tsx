import {Box, Button, Divider, Text} from '@chakra-ui/react';
import React from 'react';
import {redirect, useAuth} from '#root/contexts/AuthContext';

export const Header: React.FC = () => {
  const {user, logout} = useAuth();

  const handleOnProfileClick = async () => {
    await redirect('/profile');
  };

  const handleOnLogoClick = async () => {
    await redirect('/home');
  };

  return (
    <Box
      bgColor={'#FFFFFFB2'}
      borderRadius={6}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={4}
      w={'100%'}
      gap={2}
    >
      <Text
        onClick={handleOnLogoClick}
        fontSize={'md'}
        fontWeight={'bold'}
        textTransform={'capitalize'}
      >
        {'Tinyexpense.'}
      </Text>
      <Box bgGradient="linear(to-r, #ff5757, #8c52ff)" h="2px" w={'100%'}>
        <Divider h="1px" />
      </Box>
      <Box
        display={'flex'}
        flexDir={'row'}
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={handleOnProfileClick}
      >
        <Text size={'md'} textTransform={'capitalize'}>
          {user?.userProfile?.name || 'Test user'}
        </Text>
        <Box
          p={'2px'}
          borderRadius={'7px'}
          bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
        >
          <Button
            bgColor={'#FFFFFFB2'}
            color={'black'}
            onClick={logout}
            colorScheme="teal"
            size={'sm'}
            width="auto"
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
