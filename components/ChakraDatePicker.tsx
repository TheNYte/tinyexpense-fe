import React from 'react';
import DatePicker from 'react-datepicker';
import {Box} from '@chakra-ui/react';

import {webkitGradientBorderStyle} from '#root/common/common_constants';

import './ChakraDatePicker.css';

export const ChakraDatePicker: React.FC = ({selectedDate, onChange}) => {
  const currentDate = new Date();
  // Get the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  // Get the last day of the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  return (
    <Box
      p={'2px'}
      borderRadius={'7px'}
      w={{base: '75%', md: '50%'}}
      bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
    >
      <Box
        h={10}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'5px'}
        w={'100%'}
        p={2}
        {...webkitGradientBorderStyle}
      >
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          dateFormat="dd. MM. yyyy"
          popperPlacement="bottom"
        />
      </Box>
    </Box>
  );
};
