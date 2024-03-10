export const webkitGradientBorderStyle = {
  bg: 'white',
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
  color: 'white',
  _hover: {
    background: 'linear-gradient(to right, #8c52ff, #ff5757)',
    color: 'white',
  },
};

export const inputStyle = {
  style: webkitGradientBorderStyle,
  _hover: webkitGradientBorderStyle,
  _focus: webkitGradientBorderStyle,
};
