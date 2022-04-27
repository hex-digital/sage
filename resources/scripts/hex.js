export const HEX = {
	cache : {},
	updateCache : ($) => {
		HEX.cache = {
			body: 		$('body'),
			navigation: $('#site-navigation'),
			header:		$('#site-masthead'),
			sidebar:	$('#site-sidebar'),
			content: 	$('#site-content'),
			footer: 	$('#site-footer'),
		};
	},
	init : ($) => {
		'use strict';

		HEX.updateCache($);

    // Store Responsive Screen Sizes
		// ------------------------------------------------------------------
		const RESPONSIVE = $(window).data('responsive');

    console.log(RESPONSIVE);


		// Window scroll - navbar animation
		// ------------------------------------------------------------------
		$(window).on('scroll', () => {
			var scrollposition = $(window).scrollTop();

			if (scrollposition > 400) {
				HEX.cache.body.addClass('has-reduced-menu');
			} else {
				HEX.cache.body.removeClass('has-reduced-menu');
			}
		});



		// Overlays
		// ------------------------------------------------------------------
		$('.overlay__mobile-menu').on('click', () => {
			HEX.cache.body.toggleClass('has-navigation-active');
		});
		$('.overlay__search').on('click', () => {
			HEX.cache.body.toggleClass('has-search-active');
		});


		// Navigation menu
		// ------------------------------------------------------------------
		// Show the off canvas menu
		HEX.cache.header.on('click', '.js-toggle-offcanvas-menu', () => {
			HEX.cache.body.toggleClass('has-navigation-active');
			HEX.cache.body.removeClass('has-search-active');
		});


		// Search Dropdown toggle
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		HEX.cache.header.on('click', '.js-toggle-dropdown', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parents('.search__dropdown');

			if($el.hasClass('search__toggle') ) {
				HEX.cache.body.toggleClass('has-search-active');
				$parent.find('input[type=search]').focus();
			} else {
				HEX.cache.body.removeClass('has-search-active');
			}

			HEX.cache.body.removeClass('has-navigation-active');

			return false;
		});

		// Search field focus
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		HEX.cache.header.on('focus', '.search__input', () => {
			if (RESPONSIVE.isMD || RESPONSIVE.isLG) {
				if(HEX.cache.body.hasClass('has-standard-search')) {
					HEX.cache.body.addClass('has-search-active');
				}
			}
		});



		// Mobile Flyout menu
		// -----------------------------------------------------------
		var cascadeLevel = 1;
		HEX.cache.navigation.on('click', '.menu-item-has-children > .menu-main-link', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parent('li');

			// Force next navigation level to be shown
			$parent.addClass('is-expanded').siblings().removeClass('is-expanded');

			cascadeLevel++;
			HEX.cache.navigation.addClass('cascade-level-' + cascadeLevel);

      if (RESPONSIVE.isSM || RESPONSIVE.isXS) {
				return false;
			}

		});

		// Back Button - Mobile Flyout menu
		// -----------------------------------------------------------
		HEX.cache.navigation.on('click', '.js-menu-back-button', () => {
			HEX.cache.navigation.removeClass('cascade-level-' + cascadeLevel);
			cascadeLevel--;
			HEX.cache.navigation.addClass('cascade-level-' + cascadeLevel);

			return false;
		});


	}
};
