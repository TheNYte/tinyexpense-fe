import {
  Box,
  Input,
  VStack,
  Text,
  HStack,
  IconButton,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useDisclosure,
  InputGroup,
  InputRightAddon,
  Tag,
} from '@chakra-ui/react';

import {CloseIcon} from '@chakra-ui/icons';

import React, {useContext, useMemo, useState} from 'react';
import {AddIcon} from '@chakra-ui/icons';
import {CategoryMenu} from '#root/components/CategoryMenu';
import {AuthContext} from '#root/contexts/AuthContext';
import {
  CategoryColors,
  webkitGradientBorderStyle,
} from '#root/common/common_constants';
import {ChakraDatePicker} from '#root/components/ChakraDatePicker';
import {Header} from '#root/components/Header';
import {CustomModal} from '#root/components/CustomModal';
import {useAxiosQuery} from '#root/hooks/useAxiosQuery';
import {ApiConfig} from '#root/common/api_config';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {CategoriesData, Expenses} from '#root/pages/home/home_types';
import {getDateRange} from '#root/pages/home/home_helpers';
import * as _ from 'lodash';
import {FilterCategoryMenu} from '#root/components/FilterCategoryMenu';
import {FilterByDateTime} from '#root/components/FilterByDateTime';

export default function Page(): React.FC {
  const currentDate = new Date();

  const [categoryId, setCategoryId] = useState<string | number>('');
  const [expenseDescription, setExpenseDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>(
    currentDate.toString(),
  );

  const [selectedCategory, setSelectedCategory] = useState<number | string>('');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('');

  // Function to handle category selection
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle date range selection
  const handleDateRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedDateRange(event.target.value);
  };

  const context = useContext(AuthContext);

  const handleDateChange = (date: string) => {
    const parsedDate = new Date(date).toISOString();
    setSelectedDate(parsedDate);
  };

  const {data: expensesData, refetch} = useAxiosQuery<Expenses[]>(
    ApiConfig.expenses,
  );
  const {data: categoriesData} = useAxiosQuery<CategoriesData[]>(
    ApiConfig.categories,
  );

  const sortedData = expensesData?.sort((a, b) => {
    // Convert dateTime strings to Date objects for comparison
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);

    // Compare dateA and dateB
    if (dateA < dateB) {
      return 1; // dateB comes before dateA
    } else if (dateA > dateB) {
      return -1; // dateA comes after dateB
    } else {
      return;
    }
  });

  const filteredData = useMemo(
    () =>
      sortedData?.filter((item) => {
        // Check if selectedCategory matches or if no category is selected
        const categoryMatch =
          selectedCategory === '' || item.categoryName === selectedCategory;
        // Check if selectedDateRange matches or if no date range is selected
        const dateRangeMatch =
          selectedDateRange === '' ||
          getDateRange(item.dateTime) === selectedDateRange;

        // Return true only if both categoryMatch and dateRangeMatch are true
        return categoryMatch && dateRangeMatch;
      }),
    [selectedCategory, selectedDateRange, sortedData],
  );

  const mutateAddExpense = useMutation({
    mutationFn: (expenseData: Expenses) => {
      return axios.post(ApiConfig.expenses, JSON.stringify(expenseData));
    },
    onSuccess: async () => {
      await refetch();
    },
  });

  const handleAddItem = () => {
    let categoryItem: CategoriesData | undefined;
    if (categoryId !== '' && amount > 0) {
      if (typeof categoryId === 'string' && categoriesData) {
        categoryItem = categoriesData.find(
          (categoryItem) => categoryItem.id === parseInt(categoryId, 10),
        );
      }
      const expenseData = {
        categoryId: categoryId,
        expenseDescription: expenseDescription,
        amount: amount,
        currency: 'EUR',
        dateTime: selectedDate,
        color: categoryItem?.color,
      };
      mutateAddExpense.mutate(expenseData);
      setCategoryId('');
      setExpenseDescription('');
      setAmount(0);
    }
  };

  const mutateRemoveExpense = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`${ApiConfig.expenses}/${id}`);
    },
    onSuccess: async () => {
      await refetch();
    },
  });

  const handleRemoveItem = (id: number, e) => {
    e.stopPropagation();
    mutateRemoveExpense.mutate(id);
  };

  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleAddNewCategory = () => {
    onOpen();
  };

  const groupedSortedData = _.groupBy(filteredData, 'dateTime');
  const displayedDateRanges = new Set<string>();

  return context?.user === null ? (
    <Box />
  ) : (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'space-between'}
      gap={4}
      p={2}
      maxHeight="calc(100vh - 35px)"
    >
      <Header />
      <Box
        p={4}
        mx="auto"
        minW={{base: '350px', sm: '500px'}}
        maxW={{base: '350px', sm: '500px'}}
        bg="#FFFFFF"
        rounded="lg"
        shadow="md"
        display={'flex'}
        flexDir={'column'}
        overflow={'hidden'}
      >
        <Box
          display={'flex'}
          flexDir={'column'}
          alignItems={'space-between'}
          gap={4}
          overflow={'hidden'}
          overflowY={'auto'}
        >
          <CustomModal isOpen={isOpen} onClose={onClose} />
          <VStack spacing={4} align="flex-start" w="100%">
            <HStack
              spacing={4}
              w="100%"
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              pr={4}
            >
              <CategoryMenu
                currentValue={categoryId}
                onChange={(e) => setCategoryId(e)}
                onNewCategoryClick={handleAddNewCategory}
                categories={categoriesData}
              />
              <ChakraDatePicker
                selectedDate={selectedDate}
                onChange={handleDateChange}
              />
            </HStack>
            <HStack
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              w={'100%'}
              pr={4}
            >
              <Box
                p={'2px'}
                borderRadius={'7px'}
                bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
              >
                <InputGroup>
                  <Input
                    {...webkitGradientBorderStyle}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    maxW={'70px'}
                    px={'2px'}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                  <InputRightAddon
                    {...webkitGradientBorderStyle}
                    px={'2px'}
                    paddingLeft={0}
                  >
                    {context?.user.userProfile.currency}
                  </InputRightAddon>
                </InputGroup>
              </Box>
              <Box
                p={'2px'}
                borderRadius={'7px'}
                bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
                w={{base: '75%', md: '50%'}}
              >
                <Input
                  borderRadius={'5px'}
                  {...webkitGradientBorderStyle}
                  color={'black'}
                  _placeholder={{color: 'black'}}
                  placeholder="Item description"
                  value={expenseDescription}
                  onChange={(e) => setExpenseDescription(e.target.value)}
                />
              </Box>
              <Box
                p={'2px'}
                borderRadius={'7px'}
                bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
              >
                <IconButton
                  bgColor={'#FFFFFFB2'}
                  aria-label="Add Item"
                  onClick={handleAddItem}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </HStack>
            <Box w={'100%'} h={'100%'} pr={4}>
              <Box
                bgGradient="linear(to-r, #ff5757, #8c52ff)"
                h="2px"
                w={'100%'}
              >
                <Divider h="1px" />
              </Box>
            </Box>
            <HStack
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              w={'100%'}
              pr={4}
            >
              <FilterCategoryMenu
                currentValue={selectedCategory}
                onChange={handleCategoryChange}
                categories={categoriesData}
              />
              <FilterByDateTime
                currentValue={selectedDateRange}
                onChange={handleDateRangeChange}
              />
            </HStack>
          </VStack>
          <Box w={'100%'} h={'100%'} pr={4}>
            <Box bgGradient="linear(to-r, #ff5757, #8c52ff)" h="2px" w={'100%'}>
              <Divider h="1px" />
            </Box>
          </Box>
          {_.isEmpty(groupedSortedData) ? (
            <Text m={0} fontSize="md">
              No items recorded.
            </Text>
          ) : (
            <Accordion
              w={'100%'}
              allowToggle
              border={'none'}
              display={'flex'}
              flexDir={'column'}
              gap={2}
              paddingRight={4}
            >
              {Object.keys(groupedSortedData).map((timestamp) => {
                const categorizedDate = getDateRange(timestamp);
                const expenses = groupedSortedData[timestamp];

                if (displayedDateRanges.has(categorizedDate)) {
                  return null;
                }
                displayedDateRanges.add(categorizedDate);

                return (
                  <React.Fragment key={timestamp}>
                    <Box display={'flex'}>
                      <Box
                        bgGradient={'linear(to right, #ff5757, #8c52ff)'}
                        p={'2px'}
                        display={'flex'}
                        borderRadius={'7px'}
                      >
                        <Tag
                          borderRadius={'5px'}
                          bgGradient={'linear(to right, #ff5757B2, #8c52ffB2)'}
                          size={'sm'}
                        >
                          <Text fontSize={'md'} fontWeight={'bold'}>
                            {categorizedDate}
                          </Text>
                        </Tag>
                      </Box>
                    </Box>
                    {expenses.map((item) => {
                      const date = new Date(item.dateTime);
                      const formattedDate = date.toLocaleDateString();
                      const formattedTime = date.toLocaleTimeString();

                      return (
                        <Box
                          key={item.id}
                          p={'2px'}
                          borderRadius={'7px'}
                          bgGradient={
                            'linear-gradient(to right, #ff5757, #8c52ff)'
                          }
                          display={'flex'}
                        >
                          <Box
                            borderLeftRadius={'5px'}
                            flex={1}
                            bgColor={CategoryColors[item.color]}
                          />
                          <AccordionItem
                            flex={10}
                            borderRightRadius={'5px'}
                            {...webkitGradientBorderStyle}
                          >
                            <AccordionButton
                              paddingRight={2}
                              display={'flex'}
                              flex={'1'}
                            >
                              <Box
                                flex={'5'}
                                display={'flex'}
                                flexDir={'row'}
                                justifyContent={'space-between'}
                              >
                                <Box>{item.categoryName}</Box>
                                <Box>{`${item.amount} ${context?.user?.userProfile.currency}`}</Box>
                              </Box>
                              <Box
                                flex={'1'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={4}
                                textAlign={'end'}
                              >
                                <AccordionIcon />
                                <CloseIcon
                                  fontSize={'xs'}
                                  onClick={(e) => handleRemoveItem(item.id, e)}
                                />
                              </Box>
                            </AccordionButton>
                            <AccordionPanel
                              whiteSpace="wrap"
                              p={2}
                              gap={'1px'}
                              pl={4}
                            >
                              <Text
                                fontSize={'xs'}
                              >{`${formattedDate} - ${formattedTime}`}</Text>
                              <Text>{item.expenseDescription}</Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Box>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </Accordion>
          )}
        </Box>
      </Box>
    </Box>
  );
}
