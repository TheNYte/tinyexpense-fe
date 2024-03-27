import {Box, Text, Button, Input, useToast} from '@chakra-ui/react';

import React, {useContext, useState} from 'react';
import {AuthContext, useAuth} from '#root/contexts/AuthContext';
import {webkitGradientBorderStyle} from '#root/common/common_constants';
import {Header} from '#root/components/Header';
import {CurrencyMenu} from '#root/components/CurrencyMenu';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {ApiConfig} from '#root/common/api_config';

export default function Page(): React.ReactNode {
  const toast = useToast();
  const context = useContext(AuthContext);
  const [currency, setCurrency] = useState<string>(
    context?.user?.userProfile.currency,
  );
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword1, setNewPassword1] = useState<string>('');
  const [newPassword2, setNewPassword2] = useState<string>('');

  const mutateData = {
    oldPassword,
    newPassword: newPassword1,
  };

  const {logout} = useAuth();

  const mutatePassword = useMutation({
    mutationFn: (data: any) => {
      return axios.post(ApiConfig.changePassword, JSON.stringify(data));
    },
    onSuccess: async () => {
      toast({
        title: 'Password change was successful',
        description: 'You have successfully changed your password.',
        status: 'success', // Set status to 'success' for green color
        duration: 5000, // Duration in milliseconds
        isClosable: true, // Allow closing the toast
      });
      setOldPassword('');
      setNewPassword1('');
      setNewPassword2('');
      logout();
    },
    onError: async () => {
      toast({
        title: 'Something went wrong',
        description: 'Your old password was wrong.',
        status: 'error', // Set status to 'success' for green color
        duration: 5000, // Duration in milliseconds
        isClosable: true, // Allow closing the toast
      });
    },
  });

  const onProfileChangePasswordChange = () => {
    if (newPassword1 === newPassword2) {
      mutatePassword.mutate(mutateData);
    }
  };

  let bgColor = 'linear-gradient(to right, #ff5757, #8c52ff)';

  if (
    newPassword1 !== newPassword2 &&
    newPassword1 !== '' &&
    newPassword2 !== ''
  ) {
    bgColor = 'linear-gradient(to right, red, red)';
  } else if (
    newPassword1 === newPassword2 &&
    newPassword1 !== '' &&
    newPassword2 !== ''
  ) {
    bgColor = 'linear-gradient(to right, green, green)';
  }
  return context?.user === null ? (
    <Box />
  ) : (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'space-between'}
      gap={4}
    >
      <Header />
      <Box
        p={4}
        mx="auto"
        minW={{base: '350px', sm: '500px'}}
        maxW={{base: '350px', sm: '500px'}}
        bg="#FFFFFF"
        rounded="lg"
        shadow="md"
        overflow="hidden"
        display={'flex'}
        flexDir={'column'}
        gap={4}
        maxHeight="calc(100vh - 150px)" // Adjust the max height as needed
      >
        <Box w={'100%'} h={'100%'} display={'flex'} gap={2} flexDir={'column'}>
          <Box display={'flex'} flexDir={'column'} gap={1}>
            <Text>{'Change Password:'}</Text>
            <Box
              p={'2px'}
              borderRadius={'7px'}
              bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
            >
              <Input
                borderRadius={'5px'}
                {...webkitGradientBorderStyle}
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Box>
            <Box p={'2px'} borderRadius={'7px'} bgGradient={bgColor}>
              <Input
                borderRadius={'5px'}
                {...webkitGradientBorderStyle}
                type="password"
                placeholder="New Password"
                value={newPassword1}
                onChange={(e) => setNewPassword1(e.target.value)}
              />
            </Box>
            <Box p={'2px'} borderRadius={'7px'} bgGradient={bgColor}>
              <Input
                borderRadius={'5px'}
                {...webkitGradientBorderStyle}
                type="password"
                placeholder="New Password again"
                value={newPassword2}
                onChange={(e) => setNewPassword2(e.target.value)}
              />
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Box
              p={'2px'}
              borderRadius={'7px'}
              bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
            >
              <Button
                bgColor={'#FFFFFFB2'}
                aria-label="Add Item"
                onClick={onProfileChangePasswordChange}
              >
                {'Change password'}
              </Button>
            </Box>
          </Box>
          <Box display={'flex'} flexDir={'column'} gap={1}>
            <Text>{'Change currency:'}</Text>
            <CurrencyMenu
              currentValue={currency}
              onChange={(e) => setCurrency(e)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
