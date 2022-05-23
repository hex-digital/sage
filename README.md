<p align="center">
  <a href="https://roots.io/sage/">
    <img alt="Sage" src="https://cdn.roots.io/app/uploads/logo-sage.svg" height="100">
  </a>
</p>

<p align="center">
  <a href="LICENSE.md">
    <img alt="MIT License" src="https://img.shields.io/github/license/roots/sage?color=%23525ddc&style=flat-square" />
  </a>

  <a href="https://packagist.org/packages/roots/sage">
    <img alt="Packagist" src="https://img.shields.io/packagist/v/roots/sage.svg?style=flat-square" />
  </a>

  <a href="https://github.com/roots/sage/actions">
    <img alt="Build Status" src="https://img.shields.io/github/workflow/status/roots/sage/Main?style=flat-square" />
  </a>

  <a href="https://twitter.com/rootswp">
    <img alt="Follow Roots" src="https://img.shields.io/twitter/follow/rootswp.svg?style=flat-square&color=1da1f2" />
  </a>
</p>

<p align="center">
  <strong>WordPress starter theme with Laravel Blade components and templates, Tailwind CSS, and a modern development workflow</strong>
</p>

<p align="center">
  <a href="https://roots.io/"><strong><code>Website</code></strong></a> &nbsp;&nbsp; <a href="https://docs.roots.io/sage/10.x/installation/"><strong><code>Documentation</code></strong></a> &nbsp;&nbsp; <a href="https://github.com/roots/sage/releases"><strong><code>Releases</code></strong></a> &nbsp;&nbsp; <a href="https://discourse.roots.io/"><strong><code>Support</code></strong></a>
</p>

## Supporting

**Sage** is an open source project and completely free to use.

However, the amount of effort needed to maintain and develop new features and products within the Roots ecosystem is not sustainable without proper financial backing. If you have the capability, please consider donating using the links below:

<div align="center">

[![Sponsor on GitHub](https://img.shields.io/static/v1?label=sponsor&message=%E2%9D%A4&logo=GitHub&style=flat-square)](https://github.com/sponsors/roots)
[![Sponsor on Patreon](https://img.shields.io/badge/sponsor-patreon-orange.svg?style=flat-square&logo=patreon")](https://www.patreon.com/rootsdev)
[![Donate via PayPal](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square&logo=paypal)](https://www.paypal.me/rootsdev)

</div>

## Features

- Harness the power of [Laravel](https://laravel.com) and its available packages thanks to [Acorn](https://github.com/roots/acorn).
- Clean, efficient theme templating utilizing [Laravel Blade](https://laravel.com/docs/master/blade).
- Lightning fast frontend development workflow powered by [Bud](https://bud.js.org/).
- Out of the box support for [Tailwind CSS](https://tailwindcss.com/).

## Requirements

Make sure all dependencies have been installed before moving on:

- [Acorn](https://docs.roots.io/acorn/2.x/installation/) v2
- [WordPress](https://wordpress.org/) >= 5.9
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4.0 (with [`php-mbstring`](https://secure.php.net/manual/en/book.mbstring.php) enabled)
- [Composer](https://getcomposer.org/download/)
- [Node.js](http://nodejs.org/) >= 16
- [Yarn](https://yarnpkg.com/en/docs/install)

## Theme installation

- Install Node : We like to use Node Version Manager or 'NVM' : https://github.com/nvm-sh/nvm

- Install Yarn : https://yarnpkg.com/getting-started/install

- Install Composer : https://getcomposer.org/ and follow the instructions here : https://getcomposer.org/doc/00-intro.md#locally

- Make sure you move the `composer.phar` into `/usr/local/bin/composer` so that it is accessbile globally.

- Add and update `.env` with your local dev URL, for example :

`BROWSER_SYNC_PROXY='http://sandbox.local'`

`APP_ENV='development'`

- Run `yarn` from the theme folder to install dependencies

- Once all of that is done, run `yarn dev` to start a watch build that compiles as you work, or `yarn build` for a production build.

## Theme setup

- Edit `app/setup.php` to enable or disable theme features, setup navigation menus, post thumbnail sizes, and sidebars.

- Edit the `.js` files in the `tools/tailwind` folder to customize the theme colours, fonts and other visual properties. We have set some defaults to get you started.


## Some useful commands

### Yarn
- `yarn dev` — Compile assets when file changes are made, start Browsersync session
- `yarn build` — Compile assets for production

### Acorn commands
To access your site's shell and run Acorn commands, using Local WP right click on your site listed in the left column, and select 'Open site shell'. This will open a terminal where you can run the commands below :

- `wp acorn acf:field Example` to generate a new reusable field partial that you can share between various different Acorn components.
- `wp acorn acf:block Example` to generate a ACF field based block
- `wp acorn acf:widget Example` to generate a ACF field based widget
- `wp acorn acf:options Example` to generate a ACF field based options page
- `wp acorn make:component Example` to create a new view component class
- `wp acorn make:composer Example` to create a new view composer class
- `wp acorn make:provider Example` to create a new service provider class
- `wp acorn optimize` you you are battling to generate new Acorn components



## Theme structure

```sh
themes/your-theme-name/   # → Root of your Sage based theme
├── app/                  # → Theme PHP
│   ├── Blocks/           # → ACF Blocks
│   ├── Providers/        # → Service providers
│   ├── View/             # → View models
│   ├── filters.php       # → Theme filters
│   └── setup.php         # → Theme setup
├── composer.json         # → Autoloading for `app/` files
├── public/               # → Built theme assets (never edit)
├── functions.php         # → Theme bootloader
├── index.php             # → Theme template wrapper
├── node_modules/         # → Node.js packages (never edit)
├── package.json          # → Node.js dependencies and scripts
├── resources/            # → Theme assets and templates
│   ├── fonts/            # → Theme fonts
│   ├── images/           # → Theme images
│   ├── scripts/          # → Theme javascript
│   ├── styles/           # → Theme stylesheets
│   └── views/            # → Theme templates
│       ├── components/   # → Component templates
│       ├── forms/        # → Form templates
│       ├── layouts/      # → Base templates
│       ├── partials/     # → Partial templates
        └── sections/     # → Section templates
├── tools/                #
│   └── tailwind/         # → Tailwind configuration and settings
├── screenshot.png        # → Theme screenshot for WP admin
├── style.css             # → Theme meta information
├── vendor/               # → Composer packages (never edit)
└── bud.config.js         # → Bud configuration
```
