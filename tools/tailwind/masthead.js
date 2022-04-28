const { pxToRem } = require('@captaincss/captaincss/helpers');
const { colors } = require('./colors');

exports.masthead = {
  'logo-height': pxToRem(80),
  'logo-height-mobile': pxToRem(60),
  'masthead-height': pxToRem(100),
  'masthead-height-mobile': pxToRem(80),

  'masthead-bg': colors.white,
  'masthead-color': colors.dark,
  'masthead-border-color': colors.border,


  'navigation-offset-mobile': '20vw',

  'navigation-link-color' : colors.dark,
  'navigation-link-color-hover' : colors.white,
  'navigation-link-bg' : colors.white,
  'navigation-link-bg-hover' : colors.primary.default,


  'footer-height': pxToRem(200),
};
