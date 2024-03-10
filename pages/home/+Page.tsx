import {
  Box,
  Input,
  Button,
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
} from '@chakra-ui/react';

import {CloseIcon} from '@chakra-ui/icons';

import React, {useContext, useState} from 'react';
import {AddIcon} from '@chakra-ui/icons';
import {CategoryMenu} from '#root/components/CategoryMenu';
import {AuthContext, redirect, useAuth} from '#root/contexts/AuthContext';
import {
  randomItems,
  webkitGradientBorderStyle,
} from '#root/common/common_constants';
import {ChakraDatePicker} from '#root/components/ChakraDatePicker';
import {Header} from '#root/components/Header';

export default function Page(): React.FC {
  const currentDate = new Date();

  const [category, setCategory] = useState<string>('');
  const [expenseDescription, setExpenseDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [itemList, setItemList] = useState<Record<string, any>[]>(randomItems);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const context = useContext(AuthContext);

  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  // TODO: pridať datePicker, input pre dlhsi text?, item name -> description
  // V liste zobrazovať category a price z €
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

  const handleAddItem = () => {
    if (
      category.trim() !== '' &&
      expenseDescription.trim() !== '' &&
      amount > 0
    ) {
      setItemList((prevList) => [
        {category, expenseDescription, amount},
        ...prevList,
      ]);
      setCategory('');
      setExpenseDescription('');
      setAmount(0);
    }
  };

  const handleRemoveItem = (e, index: number) => {
    console.log('e', e);
    e.preventDefault();
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };

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
        <VStack spacing={4} align="flex-start" w="100%">
          <HStack
            spacing={4}
            w="100%"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <CategoryMenu
              currentValue={category}
              onChange={(e) => setCategory(e)}
            />
            <Box
              p={'2px'}
              borderRadius={'7px'}
              bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
            >
              <Input
                borderRadius={'5px'}
                {...webkitGradientBorderStyle}
                type="number"
                placeholder="Amount"
                value={amount}
                maxW={'70px'}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </Box>
          </HStack>
          <HStack w={'100%'}>
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
        {itemList.length === 0 ? (
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
            {itemList.map((item, index) => (
              <Box
                key={index}
                p={'2px'}
                borderRadius={'7px'}
                bgGradient={'linear-gradient(to right, #ff5757, #8c52ff)'}
                display={'flex'}
              >
                <Box borderLeftRadius={'5px'} flex={1} bgColor={'black'} />
                <AccordionItem
                  flex={10}
                  borderRightRadius={'5px'}
                  {...webkitGradientBorderStyle}
                >
                  <AccordionButton paddingRight={2} display={'flex'} flex={'1'}>
                    <Box
                      flex={'5'}
                      display={'flex'}
                      flexDir={'row'}
                      justifyContent={'space-between'}
                    >
                      <Box>{item.expenseCategoryId}</Box>
                      <Box>{item.amount}</Box>
                    </Box>
                    <Box flex={'1'} textAlign={'end'}>
                      <AccordionIcon />
                      <CloseIcon
                        fontSize={'xs'}
                        onClick={(e) => handleRemoveItem(e, index)}
                      />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel whiteSpace="wrap" p={2} pl={4}>
                    <Text>{item.expenseDescription}</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Box>
            ))}
          </Accordion>
        )}
      </Box>
    </Box>
  );
}
