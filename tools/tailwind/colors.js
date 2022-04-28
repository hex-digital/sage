const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

const primary = '#042270';
const secondary = '#008CD1';
const link = '#008CD1';

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
    'lighter': lighten('rgb(153, 27, 27)', 0.2),
    'default': 'rgb(153, 27, 27)',
    'darker': darken('rgb(153, 27, 27)', 0.2),
  },
  'light' : '#e9ecef',
  'dark' : '#6c757d',
  'border' : '#ced4da',
  'form' : {
    'text' : {
      'default': '#6c757d',
      'hover': darken('#6c757d', .5),
      'focus': darken('#6c757d', .5),
      'placeholder': lighten('#6c757d', .2),
    },
    'border': {
      'default': '#ced4da',
      'hover': lighten('#ced4da', 0.2),
      'focus': primary,
      'shadow': lighten(secondary, .9)
    },
    'bg': {
      'default': '#ffffff',
      'hover': '#e9ecef',
      'focus': '#ffffff',
    }
  }
};
