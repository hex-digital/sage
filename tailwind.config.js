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
const { masthead, mainnav, footer, wordpress } = require('./tools/tailwind/site')

module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
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
  darkMode: 'media',
  theme: {
    extend: {
      activeBreakpoint,
      fontSize,
      colors,
    },
    masthead,
    mainnav,
    footer,
    wordpress,
    fontFamily,
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
