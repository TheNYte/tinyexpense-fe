import React, {useCallback, useMemo, useState} from 'react';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useMenu,
} from '@chakra-ui/react';
import {useMutation} from '@tanstack/react-query';
import {ApiConfig} from '#root/common/api_config';
import {redirect} from '#root/contexts/AuthContext';
import {ColorPicker} from '#root/components/ColorPicker';
import {CategoryColors} from '#root/common/common_constants';
import {useAxiosQuery} from '#root/hooks/useAxiosQuery';
import {CloseIcon} from '@chakra-ui/icons';
import axios from 'axios';

export const CustomModal = (props) => {
  const {isOpen, onClose} = props;

  const [newCategoryName, setNewCategoryNameName] = useState('');
  const [newColor, setNewColor] = useState<CategoryColors>('GREEN');

  const {data, refetch} = useAxiosQuery<any>(ApiConfig.categories);

  const mutateAddCategory = useMutation({
    mutationFn: (data: any) => {
      return axios.post(ApiConfig.categories, JSON.stringify(data));
    },
    onSuccess: async () => {
      await refetch();
    },
  });

  const mutateRemoveCategory = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`${ApiConfig.categories}/${id}`);
    },
    onSuccess: async () => {
      await refetch();
    },
  });

  const mutationData = useMemo(
    () => ({
      categoryName: newCategoryName,
      color: newColor,
    }),
    [newCategoryName, newColor],
  );

  const handleAddCategory = () => {
    console.log('mutate', mutationData);
    mutateAddCategory.mutate(mutationData);
  };

  const handleOnColorInputChange = (e) => {};

  const handleRemoveItem = (id: number) => {
    mutateRemoveCategory.mutate(id);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius={'25px'}
        bgGradient=" radial-gradient(gray.600, gray.800)"
      >
        <ModalHeader borderTopRadius={'25px'} bgColor={'#FFFFFFCC'}>
          Categories
        </ModalHeader>
        <ModalBody bgColor={'#FFFFFFCC'}>
          <Stack spacing={4}>
            {/* Display current categories */}
            {data?.map((category, index) => (
              <Box
                key={category.id}
                p="2px"
                borderRadius="7px"
                display={'flex'}
                bgGradient="linear-gradient(to right, #ff5757, #8c52ff)"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  height="35px"
                  borderRadius={'5px'}
                  bg="#FFFFFFB2"
                  w={'100%'}
                  overflow={'hidden'}
                >
                  <Box
                    height="100%"
                    w={'30px'}
                    backgroundColor={CategoryColors[category.color]}
                  />
                  <Box
                    display={'flex'}
                    w={'100%'}
                    flexDir={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={2}
                  >
                    <Text pl={2} color="black">
                      {category.name}
                    </Text>
                    <CloseIcon
                      fontSize={'xs'}
                      onClick={(e) => handleRemoveItem(category.id)}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
            {/* Input field for adding new category */}
            <Box display={'flex'} flexDir={'row'} alignItems={'center'} gap={4}>
              <Input
                placeholder="New category"
                value={newCategoryName}
                onChange={(e) => setNewCategoryNameName(e.target.value)}
              />
              <ColorPicker
                currentColor={newColor}
                onColorChange={handleOnColorInputChange}
                onButtonClick={setNewColor}
              />
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter bgColor={'#FFFFFFCC'} borderBottomRadius={'25px'}>
          <Button colorScheme="blue" mr={3} onClick={handleAddCategory}>
            Add Category
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
