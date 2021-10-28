const { pxToRem } = require('@captaincss/captaincss/helpers');

const breakpoints = {
  'xs': 440,
  'sm': 760, // Tablet+
  'md': 880,
  'lg': 1180, // Small Desktop+
  'xl': 1380, // Desktop+
  'wide': 1600, // Wide Desktop+
}

exports.screens = Object.keys(breakpoints).reduce((screens, breakpointName) => {
  return {
    ...screens,
    [breakpointName]: {'min': pxToRem(breakpoints[breakpointName])},
    [`${breakpointName}-down`]: {'max': pxToRem(breakpoints[breakpointName] - 1)},
  };
}, {});
