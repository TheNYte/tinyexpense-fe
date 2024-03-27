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
  IconButton,
} from '@chakra-ui/react';
import {AddIcon, ChevronDownIcon} from '@chakra-ui/icons';
import {webkitGradientBorderStyle} from '#root/common/common_constants';

interface FilterCategoryMenuProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentValue: string;
  categories: any[];
}

export const FilterCategoryMenu: React.FC<FilterCategoryMenuProps> = ({
  onChange,
  currentValue,
  categories,
}) => {
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
        placeholder="Filter by category"
        value={currentValue}
        outlineColor={'transparent'}
        onChange={(e) => onChange(e)}
      >
        {categories?.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};
