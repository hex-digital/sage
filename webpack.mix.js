const mix = require('laravel-mix');
const path = require('path');
require('@tinypixelco/laravel-mix-wp-blocks');
require('palette-webpack-plugin/src/mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

 mix.setPublicPath('./public').browserSync(process.env.BROWSER_SYNC_PROXY);

 mix.webpackConfig({
   resolve: {
     alias: {
       '@': path.resolve(__dirname),
       '~': path.resolve(__dirname),
     },
   },
 });

 mix.palette({
   output: 'palette.json',
   blacklist: ['transparent', 'inherit'],
   priority: 'tailwind',
   pretty: process.env.NODE_ENV === 'development',
   tailwind: {
     config: './tailwind.config.js',
     shades: true,
     path: 'colors',
   },
 });

mix
  .sass('resources/styles/app.scss', 'styles')
  .sass('resources/styles/editor.scss', 'styles')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')],
  });

mix
  .js('resources/scripts/app.js', 'scripts')
  .js('resources/scripts/customizer.js', 'scripts')
  .blocks('resources/scripts/editor.js', 'scripts')
  .autoload({ jquery: ['$', 'window.jQuery'] })
  .extract();

mix
  .copyDirectory('resources/images', 'public/images')
  .copyDirectory('resources/fonts', 'public/fonts');

mix
  .sourceMaps()
  .version();
