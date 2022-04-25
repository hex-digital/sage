const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.spacing = {
  0 : '0',
  xs: pxToRem(8),
  sm: pxToRem(16),
  md: pxToRem(26),
  lg: pxToRem(65),
  xl: pxToRem(90),
  xxl: pxToRem(120),
};
