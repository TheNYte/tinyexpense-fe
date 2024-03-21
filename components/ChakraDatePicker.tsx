import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {Box} from '@chakra-ui/react';

import {webkitGradientBorderStyle} from '#root/common/common_constants';

import './ChakraDatePicker.css';
import {CalendarIcon} from '@chakra-ui/icons';

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box
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
        w={'100%'}
        p={2}
        {...webkitGradientBorderStyle}
      >
        <CalendarIcon onClick={() => setIsOpen(!isOpen)} />
        <DatePicker
          selected={selectedDate}
          open={isOpen}
          onChange={onChange}
          dateFormat="dd. MM. yyyy"
          popperPlacement="left"
          // popperModifiers={[
          //   {
          //     name: 'offset',
          //     options: {
          //       offset: [5, 10],
          //     },
          //   },
          // ]}
          // popperModifiers={[
          //   {
          //     name: 'myOffset',
          //     options: {
          //       offset: [500, 10],
          //     },
          //     fn(state) {
          //       // Do something with the state
          //       return state;
          //     },
          //   },
          // ]}
        />
      </Box>
    </Box>
  );
};
