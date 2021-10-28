const { colors } = require('./tools/tailwind/colors');
const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } = require('./tools/tailwind/typography');
const { screens } = require('./tools/tailwind/screens');
const { skipLink } = require('./tools/tailwind/skipLink');
const { spacing } = require('./tools/tailwind/spacing');
const { transitionDuration, transitionTimingFunction } = require('./tools/tailwind/animation');
const { zIndex } = require('./tools/tailwind/zIndex');
const { activeBreakpoint } = require('./tools/tailwind/captainActiveBreakpoint');
const { frame } = require('./tools/tailwind/captainFrame');
const { layout } = require('./tools/tailwind/captainLayout');
const { wrapper } = require('./tools/tailwind/captainWrapper');

module.exports = {
  prefix: 'u-',
  mode: 'jit',
  plugins: [require('@captaincss/captaincss')],
  captain: {
    prefix: {
      objects: 'o-',
      components: 'c-',
    },
    separator: {
      elements: '__',
      modifiers: '--',
    },
    support: {
      flexGap: false, // https://caniuse.com/flexbox-gap
    },
  },
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      './*.php',
      './app/**/*.php',
      './resources/**/*.{php,vue,js}',
      './tools/tailwind/safelist.txt',
    ],
    /* Note: Safelist currently not supported by JIT. See: https://tailwindcss.com/docs/just-in-time-mode for how to use safelist.txt */
    // options: {
    //   safelist: {
    //     standard: getCSSWhitelistPatterns(),
    //   },
    // },
  },
  theme: {
    extend: {
      activeBreakpoint,
    },
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    screens,
    skipLink,
    spacing,
    transitionDuration,
    transitionTimingFunction,
    zIndex,
    // CaptainCSS
    frame,
    layout,
    wrapper,
  },
  variants: {
    layout: [],
    layoutItem: [],
    layoutGaps: ['responsive'],
    layoutItemOrder: ['responsive'],
    wrapperHalf: ['responsive'],
    wrapperHalfSides: ['responsive'],
  },
};

/**
 * List of RegExp patterns for PurgeCSS
 * @returns {RegExp[]}
 */
function getCSSWhitelistPatterns() {
  /* Note: Safelist currently not supported by JIT. See: https://tailwindcss.com/docs/just-in-time-mode for how to use safelist.txt */
  return [
    /^u-object-.*$/,
    /c-btn(--.*)?$/,
    /u-w-(.*)?$/,

    // Gutenberg styles
    /^has(-.*)?$/,
    /^is(-.*)?$/,
    /^acf(-.*)?$/,
  ];
}
