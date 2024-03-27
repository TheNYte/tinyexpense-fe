import React from 'react';
import {Box, Select} from '@chakra-ui/react';
import {webkitGradientBorderStyle} from '#root/common/common_constants';

interface FilterByDateTimeProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentValue: string;
}

export const FilterByDateTime: React.FC<FilterByDateTimeProps> = ({
  onChange,
  currentValue,
}) => {
  console.log('currentValue', currentValue);
  return (
    <Box
      flex={1}
      p={'2px'}
      borderRadius={'7px'}
      bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Select
        borderRadius={'5px'}
        {...webkitGradientBorderStyle}
        placeholder="Filter by date range"
        value={currentValue}
        outlineColor={'transparent'}
        onChange={(e) => onChange(e)}
      >
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="Last week">Last week</option>
        <option value="Last month">Last month</option>
      </Select>
    </Box>
  );
};
