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

export const CategoryMenu: React.FC = ({
  onChange,
  currentValue,
  onNewCategoryClick,
  categories,
}) => {
  return (
    <Box
      p={'2px'}
      borderRadius={'7px'}
      bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <IconButton
        borderRightRadius={0}
        bgColor={'#FFFFFFB2'}
        aria-label="Add Item"
        onClick={onNewCategoryClick}
      >
        <AddIcon />
      </IconButton>
      <Select
        borderRadius={'5px'}
        borderLeftRadius={0}
        {...webkitGradientBorderStyle}
        placeholder="Select category"
        value={currentValue}
        outlineColor={'transparent'}
        onChange={(event) => {
          onChange(event?.target?.value);
        }}
      >
        {categories?.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};
