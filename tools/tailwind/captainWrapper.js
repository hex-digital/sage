const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.wrapper = (theme) => ({
  padding: {
    DEFAULT: theme('spacing.16'),
    sm: theme('spacing.20'),
    lg: theme('spacing.48') /* [1] */,
  },
  maxWidth: {
    /* [1] Largest breakpoint padding should match the two values added to max-width of the wrapper, to get the correct width */
    DEFAULT: `calc(${pxToRem(1296)})` /* [1] */,
    lg: `calc(${pxToRem(1344)})` /* [1] */,

  },
});
