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
  Collapse,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';

import {CloseIcon} from '@chakra-ui/icons';

import React, {useContext, useState} from 'react';
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
import {Expenses} from '#root/pages/home/home_types';
import {getCategorizedDate} from '#root/pages/home/home_helpers';

export default function Page(): React.FC {
  const currentDate = new Date();

  const [categoryId, setCategoryId] = useState<string | number>('');
  const [expenseDescription, setExpenseDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string | Date>(currentDate);
  const context = useContext(AuthContext);

  const handleDateChange = (date: string) => {
    const parsedDate = new Date(date).toISOString();
    setSelectedDate(parsedDate);
  };

  const {data: expensesData, refetch} = useAxiosQuery<Expenses[]>(
    ApiConfig.expenses,
  );
  const {data: categoriesData, isLoading} = useAxiosQuery<any[]>(
    ApiConfig.categories,
  );

  const sortedData = expensesData?.sort((a, b) => {
    // Convert dateTime strings to Date objects for comparison
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);

    // Compare dateA and dateB
    if (dateA < dateB) {
      return -1; // dateA comes before dateB
    } else if (dateA > dateB) {
      return 1; // dateA comes after dateB
    } else {
      return 0; // dates are equal
    }
  });

  // TODO: pridať datePicker, input pre dlhsi text?, item name -> description
  // V liste zobrazovať categoryId a price z €
  // Pri mazaní veci z listu vyskočí potvrdenie are you fucking sure.
  // a po kliknuti na item rozbaliť -> zobrazit description a timestamp
  // Nejak zakomponovať farbu. Color picker pre kategorie.
  // KAategorie je treba vedieť vyrobiť. Novy screen?
  // Profile screen, zmena hesla, currency.
  // Pridať groupy podľa dní (filter? a sortit dáta podľa najnovšieho dna). Dni, Mesiace , Roky

  {
    /*
    "expenseCategoryId": 53,
    "expenseDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "amount": 53.01,
    "currency": "EUR",
    "timestamp": "2023-04-17",
    "color": "BLACK"
  */
  }

  const mutateAddExpense = useMutation({
    mutationFn: (expenseData: any) => {
      return axios.post(ApiConfig.expenses, JSON.stringify(expenseData));
    },
    onSuccess: async () => {
      await refetch();
    },
  });

  const handleAddItem = () => {
    if (categoryId !== '' && amount > 0) {
      const categoryItem = categoriesData?.find(
        (categoryItem) => categoryItem.id === parseInt(categoryId, 10),
      );
      const expenseData = {
        categoryId: categoryId,
        expenseDescription: expenseDescription,
        amount: amount,
        currency: 'EUR',
        dateTime: selectedDate,
        color: categoryItem.color,
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

  const {isOpen: isAddExpenseOpen, onToggle: onAddExpenseOpen} =
    useDisclosure();

  return context?.user === null ? null : (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'space-between'}
      gap={4}
    >
      <Header />
      <Box
        p={4}
        mx="auto"
        minW={{base: '350px', sm: '500px'}}
        maxW={{base: '350px', sm: '500px'}}
        bg="#FFFFFFB2"
        rounded="lg"
        shadow="md"
        overflow="hidden"
        display={'flex'}
        flexDir={'column'}
        gap={4}
        maxHeight="calc(100vh - 150px)" // Adjust the max height as needed
      >
        <CustomModal isOpen={isOpen} onClose={onClose} />
        <VStack spacing={4} align="flex-start" w="100%">
          <HStack
            spacing={4}
            w="100%"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
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
        </VStack>
        <Box bgGradient="linear(to-r, #ff5757, #8c52ff)" h="2px" w={'100%'}>
          <Divider h="1px" />
        </Box>
        {sortedData?.length === 0 ? (
          <Text m={0} fontSize="md">
            No items recorded.
          </Text>
        ) : (
          <Accordion
            overflowY={'auto'}
            w={'100%'}
            allowToggle
            border={'none'}
            display={'flex'}
            flexDir={'column'}
            gap={2}
            paddingRight={4}
          >
            {expensesData?.map((item) => {
              const date = new Date(item.dateTime);
              const categorizedDate = getCategorizedDate(item.dateTime);
              const formattedDate = date.toLocaleDateString();
              const formattedTime = date.toLocaleTimeString();

              return (
                <Box
                  key={item.id}
                  p={'2px'}
                  borderRadius={'7px'}
                  bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
                  display={'flex'}
                >
                  {/*<Text fontSize={'sm'}>{categorizedDate}</Text>*/}
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
                    <AccordionPanel whiteSpace="wrap" p={2} gap={'1px'} pl={4}>
                      <Text
                        fontSize={'xs'}
                      >{`${formattedDate} - ${formattedTime}`}</Text>
                      <Text>{item.expenseDescription}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              );
            })}
          </Accordion>
        )}
      </Box>
    </Box>
  );
}
