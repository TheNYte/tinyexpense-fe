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

export const CategoryMenu: React.FC = ({onChange, currentValue}) => {
  const currencies = [
    {name: 'Test Category 1', code: '1'},
    {name: 'Test Category 1', code: '2'},
    {name: 'Test Category 1', code: '3'},
    {name: 'Test Category 1', code: '4'},
    // Add more currencies as needed
  ];

  return (
    <Box>
      <Select
        placeholder="Category"
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
