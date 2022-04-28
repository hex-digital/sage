const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.fontFamily = {
  body: ['Merriweather', 'Georgia', 'serif' ],
  heading: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  button: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  form: ['Euclid', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
};


exports.fontSize = {
  // Create map of fonts with px keys and rem values, e.g. { 16: 1rem, 32: 2rem }
  'base': pxToRem(16),
  'xs': pxToRem(14),
  'sm': pxToRem(16),
  'md': pxToRem(18),
  'lg': pxToRem(24),
  'xl': pxToRem(32),
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
  'none': 1,
  'tight': 1.25,
  'snug': 1.375,
  'normal': 1.5,
  'relaxed': 1.625,
  'loose': 2,
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};
