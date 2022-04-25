const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.fontFamily = {
  body: ['Merriweather', 'Georgia', 'serif' ],
  heading: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  button: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  form: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
};

exports.fontSize = {
  // Create map of fonts with px keys and rem values, e.g. { 16: 1rem, 32: 2rem }
  'xs': pxToRem(12),
  'sm': pxToRem(14),
  'base': pxToRem(16),
  'md': pxToRem(24),
  'lg': pxToRem(36),
  'xl': pxToRem(48),
  '2xl': pxToRem(80),
  '3xl': pxToRem(90),
  '4xl': pxToRem(100),
  '5xl': pxToRem(110),
  '6xl': pxToRem(120),
  '7xl': pxToRem(130),
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
