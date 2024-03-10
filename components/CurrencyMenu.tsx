import React from 'react';
import {
  Box,
  MenuItem,
  Menu,
  MenuButton,
  Button,
  MenuList,
  Text,
  Select,
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {webkitGradientBorderStyle} from '#root/common/common_constants';

export const CurrencyMenu = ({
  onChange,
  currentValue,
}: {
  onChange: () => void;
  currentValue: string;
}) => {
  const currencies = [
    {name: 'Euro (EUR)', code: 'EUR'},
    {name: 'US Dollar (USD)', code: 'USD'},
    {name: 'British Pound (GBP)', code: 'GBP'},
    {name: 'Swiss Franc (CHF)', code: 'CHF'},
    // Add more currencies as needed
  ];

  return (
    <Box
      p={'2px'}
      borderRadius={'7px'}
      bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
    >
      <Select
        borderRadius={'5px'}
        {...webkitGradientBorderStyle}
        placeholder="Currency"
        value={currentValue}
        onChange={(event) => {
          onChange(event?.target?.value);
        }}
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};
