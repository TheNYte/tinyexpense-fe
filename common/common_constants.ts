export const webkitGradientBorderStyle = {
  bg: '#FFFFFFB2',
  border: '2px solid transparent',
  _hover: {border: '2px solid transparent'},
  _focus: {border: '2px solid transparent'},
  _selected: {border: '2px solid transparent'},
};

export const webkitGradientTextStyle = {
  backgroundImage: 'linear-gradient(to right, #ff5757, #8c52ff)',
  color: 'transparent',
  style: {WebkitBackgroundClip: 'text'},
};

export const webkitGradientButtonStyle = {
  background: 'linear-gradient(to right, #ff5757, #8c52ff)',
  color: '#FFFFFFB2',
  _hover: {
    background: 'linear-gradient(to right, #8c52ff, #ff5757)',
    color: '#FFFFFFB2',
  },
};

export const inputStyle = {
  style: webkitGradientBorderStyle,
  _hover: webkitGradientBorderStyle,
  _focus: webkitGradientBorderStyle,
};

export const randomItems = [
  {
    expenseDescription: 'Item 1',
    expenseCategoryId: 1,
    amount: 53,
    currency: 'EUR',
    timestamp: '2023-04-17',
    categoryColor: 'black',
  },
  {
    expenseDescription:
      'This is some bullshit ass text description. This is some bullshit ass text description.  This is some bullshit ass text description. ',
    expenseCategoryId: 1,
    amount: 53,
    currency: 'EUR',
    timestamp: '2023-04-17',
    categoryColor: 'black',
  },
  {
    expenseDescription: 'Item 3',
    expenseCategoryId: 1,
    amount: 53,
    currency: 'EUR',
    timestamp: '2023-04-17',
    categoryColor: 'black',
  },
  // Add more items as needed
];

export enum CategoryColors {
  RED = 'red.500',
  ORANGE = 'orange.500',
  YELLOW = 'yellow.500',
  GREEN = 'green.500',
  BLUE = 'blue.500',
  PURPLE = 'purple.500',
  WHITE = 'white',
  BLACK = 'black',
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
  HUF = 'HUF',
  CZK = 'CZK',
}
