const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

const primary = '#474052';
const secondary = '#ed706f';
const link = '#2B68D7';

exports.colors = {
  transparent: 'transparent',
  current: 'currentColor',
  'black': '#000000',
  'white': '#FFFFFF',
  'body': '#6c757d',
  'forms': '#6c757d',
  'link': {
    'hover': lighten(link, 0.2),
    'base': link,
    'focus': darken(link, 0.2),
  },
  'primary' : {
    'lighter': lighten(primary, 0.2),
    'default': primary,
    'darker': darken(primary, 0.2),
  },
  'secondary' : {
    'lighter': lighten(secondary, 0.2),
    'default': secondary,
    'darker': darken(secondary, 0.2),
  },
  'disabled' : '#e9ecef',
  'success' : {
    'lighter': lighten('#378d5f', 0.2),
    'default': '#378d5f',
    'darker': darken('#378d5f', 0.2),
  },
  'info' : {
    'lighter': lighten('#4eaebe', 0.2),
    'default': '#4eaebe',
    'darker': darken('#4eaebe', 0.2),
  },
  'warning' : {
    'lighter': lighten('#FAB513', 0.2),
    'default': '#FAB513',
    'darker': darken('#FAB513', 0.2),
  },
  'danger' : {
    'lighter': lighten('#eb1c23', 0.2),
    'default': '#eb1c23',
    'darker': darken('#eb1c23', 0.2),
  },
  'light' : '#e9ecef',
  'dark' : '#6c757d',
  'border' : '#ced4da',
};
