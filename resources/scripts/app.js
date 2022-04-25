import {domReady} from '@roots/sage/client';
import {$} from 'jquery';
import { HEX } from './hex'


/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  $ = window.jQuery;
  HEX.init($);
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
