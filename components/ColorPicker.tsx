import {
  Button,
  Center,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import {useState} from 'react';
import {CategoryColors} from '#root/common/common_constants';

interface OwnProps {
  currentColor: string;
  onColorChange: () => void;
  onButtonClick: () => void;
}
type Props = OwnProps;

export const ColorPicker: React.FC<Props> = (props) => {
  const {currentColor, onColorChange, onButtonClick} = props;

  return (
    <Box>
      <Popover variant="picker">
        <PopoverTrigger>
          <Button
            aria-label={CategoryColors[currentColor]}
            background={CategoryColors[currentColor]}
            height="40px"
            width="40px"
            padding={0}
            minWidth="unset"
            borderRadius={3}
          ></Button>
        </PopoverTrigger>
        <PopoverContent bg={'#FFFFFFB2'} width="170px">
          <PopoverArrow bg={CategoryColors[currentColor]} />
          <PopoverCloseButton color="#FFFFFFB2" />
          <PopoverHeader
            height="100px"
            backgroundColor={CategoryColors[currentColor]}
            borderTopLeftRadius={5}
            borderTopRightRadius={5}
            color="#FFFFFFB2"
          >
            <Center height="100%">{CategoryColors[currentColor]}</Center>
          </PopoverHeader>
          <PopoverBody bg={'#FFFFFFB2'} height="120px">
            <SimpleGrid columns={5} spacing={2}>
              {(
                Object.keys(CategoryColors) as Array<
                  keyof typeof CategoryColors
                >
              ).map((c) => (
                <Button
                  key={c}
                  aria-label={c}
                  background={CategoryColors[c]}
                  height="22px"
                  width="22px"
                  padding={0}
                  minWidth="unset"
                  borderRadius={3}
                  _hover={{background: CategoryColors[c]}}
                  onClick={() => onButtonClick(`${c}`)}
                />
              ))}
            </SimpleGrid>
            <Input
              borderRadius={3}
              marginTop={3}
              placeholder="red.100"
              size="sm"
              value={CategoryColors[currentColor]}
              onChange={onColorChange}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
