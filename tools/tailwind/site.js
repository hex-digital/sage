const { pxToRem } = require('@captaincss/captaincss/helpers');
const { colors } = require('./colors');

exports.wordpress = {
  'admin-bar': '32px',
  'admin-bar-mobile': '46px',
};

exports.masthead = {
  'logo-height': pxToRem(80),
  'logo-height-mobile': pxToRem(60),
  'height': pxToRem(100),
  'height-mobile': pxToRem(80),

  'bg': colors.white,
  'color': colors.dark,
  'border-color': colors.border,
};

exports.mainnav = {
  'offset-mobile': '20vw',
  'link-color' : colors.dark,
  'link-color-hover' : colors.white,
  'link-bg' : colors.white,
  'link-bg-hover' : colors.primary.default,
}

exports.footer = {
  'height': pxToRem(200),
  'bg': colors.white,

  'link-color' : colors.dark,
  'link-color-hover' : colors.dark
}
