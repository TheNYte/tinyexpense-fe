import {Box, Text, Button, Input} from '@chakra-ui/react';

import React, {useContext, useState} from 'react';
import {AuthContext} from '#root/contexts/AuthContext';
import {webkitGradientBorderStyle} from '#root/common/common_constants';
import {Header} from '#root/components/Header';
import {CurrencyMenu} from '#root/components/CurrencyMenu';

export default function Page(): React.FC {
  const context = useContext(AuthContext);
  const [currency, setCurrency] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return context?.user === null ? null : (
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
        bg="#FFFFFFB2"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Box>
          <Box display={'flex'} flexDir={'column'} gap={1}>
            <Text>{'Change currency:'}</Text>
            <CurrencyMenu
              currentValue={currency}
              onChange={(e) => setCurrency(e)}
            />
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
                onClick={() => null}
              >
                {'Save changes'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
