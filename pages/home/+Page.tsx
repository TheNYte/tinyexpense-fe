import {
  Box,
  Select,
  Input,
  Button,
  VStack,
  Text,
  HStack,
  IconButton,
  CloseButton,
  useToast,
} from '@chakra-ui/react';
import React, {useContext, useEffect, useState} from 'react';
import {AddIcon} from '@chakra-ui/icons';
import {CategoryMenu} from '#root/components/CategoryMenu';
import {AuthContext, redirect, useAuth} from '#root/contexts/AuthContext';

export default function Page() {
  const [category, setCategory] = useState<string>('');
  const [expenseDescription, setExpenseDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [itemList, setItemList] = useState<Record<string, any>[]>([]);
  const context = useContext(AuthContext);

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

  const handleRemoveItem = (index: number) => {
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const {user, logout} = useAuth();

  return context?.user === null ? null : (
    <>
      <Box
        position={'absolute'}
        top={5}
        bgColor={'white'}
        borderRadius={6}
        display={'flex'}
        flexDir={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        h={12}
        p={4}
        minW={{base: '300px', sm: '500px'}}
      >
        <Text>{user?.account?.name || 'Test user'}</Text>
        <Button onClick={logout} colorScheme="teal" size={'sm'} width="auto">
          Logout
        </Button>
      </Box>
      <Box
        p={4}
        mx="auto"
        minH={'100px'}
        minW={{base: '300px', sm: '500px'}}
        bg="white"
        rounded="lg"
        shadow="md"
        overflow="hidden"
      >
        <VStack spacing={4} align="flex-start" w="100%">
          <HStack spacing={4} w="100%">
            <CategoryMenu
              currentValue={category}
              onChange={(e) => setCategory(e)}
            />
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              maxW={'70px'}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </HStack>
          <HStack w={'100%'}>
            <Input
              placeholder="Item Name"
              value={expenseDescription}
              onChange={(e) => setExpenseDescription(e.target.value)}
            />
            <IconButton
              isRound
              colorScheme="teal"
              aria-label="Add Item"
              onClick={handleAddItem}
            >
              <AddIcon />
            </IconButton>
          </HStack>
        </VStack>

        <VStack mt={2} spacing={2} align="flex-start" w="100%">
          {itemList.length === 0 && (
            <Text fontSize="md" color="red.500">
              No items recorded.
            </Text>
          )}
          {itemList.map((item, index) => {
            console.log('item', item);

            return (
              <HStack
                border={'2px solid black'}
                borderRadius={'5px'}
                w={'100%'}
                key={index}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={2}
              >
                <Text fontWeight="bold">{item.expenseDescription}</Text>
                <Text>{item.category}</Text>
                <Text>
                  {item.amount} {item.currency}
                </Text>
                <CloseButton onClick={() => handleRemoveItem(index)} />
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </>
  );
}

const getStyles = () => ({
  hStack: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: '1px',
    borderRadius: 'lg',
    p: 4,
    width: '100%',
    bg: 'gray.100',
  },
});
