import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {Box, useOutsideClick} from '@chakra-ui/react';

import {webkitGradientBorderStyle} from '#root/common/common_constants';

import './ChakraDatePicker.css';
import {CalendarIcon} from '@chakra-ui/icons';

export const ChakraDatePicker: React.FC = ({selectedDate, onChange}) => {
  return (
    <Box
      maxW={'200px'}
      display={'flex'}
      p={'2px'}
      borderRadius={'7px'}
      bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
    >
      <Box
        h={10}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        borderRadius={'5px'}
        p={2}
        {...webkitGradientBorderStyle}
      >
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          dateFormat="dd.MM.yyyy"
          popperPlacement="left"
        />
      </Box>
    </Box>
  );
};
