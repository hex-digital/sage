const { pxToRemPair } = require('@captaincss/captaincss/helpers');

exports.fontFamily = {
  heading: ['Protas Raisonne', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  body: ['Nantes', 'Georgia', 'serif' ],
  button: ['Protas Raisonne', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  form: ['Protas Raisonne', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
};

exports.fontSize = {
  // Create map of fonts with px keys and rem values, e.g. { 16: 1rem, 32: 2rem }
  ...pxToRemPair(100),
  ...pxToRemPair(88),
  ...pxToRemPair(80),
  ...pxToRemPair(72),
  ...pxToRemPair(56),
  ...pxToRemPair(50),
  ...pxToRemPair(48),
  ...pxToRemPair(40),
  ...pxToRemPair(38),
  ...pxToRemPair(36),
  ...pxToRemPair(30),
  ...pxToRemPair(29),
  ...pxToRemPair(28),
  ...pxToRemPair(25),
  ...pxToRemPair(24),
  ...pxToRemPair(20),
  ...pxToRemPair(19),
  ...pxToRemPair(18),
  ...pxToRemPair(16),
  ...pxToRemPair(15),
  ...pxToRemPair(14),
  ...pxToRemPair(12),
  ...pxToRemPair(10),
  ...pxToRemPair(1),
};

exports.fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
};

exports.lineHeight = {
  '1.125': '1.125',
  '1.333': '1.333',
  '1.4': '1.4',
  '1.5': '1.5',
  '1.625': '1.625',
  '1.7': '1.7',
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};
