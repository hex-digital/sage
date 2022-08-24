export const MASTHEAD = {
	cache : {},
	updateCache : ($) => {
		MASTHEAD.cache = {
			body: 		$('body'),
			navigation: $('#site-navigation'),
			masthead:		$('#site-masthead'),
		};
	},
	init : ($) => {
		'use strict';

		MASTHEAD.updateCache($);

    // Store Responsive Screen Sizes
		// ------------------------------------------------------------------
		const RESPONSIVE = $(window).data('responsive');
    console.log(RESPONSIVE);

		// Window scroll - navbar animation
		// ------------------------------------------------------------------
		$(window).on('scroll', () => {
			var scrollposition = $(window).scrollTop();

			if (scrollposition > 400) {
				MASTHEAD.cache.body.addClass('has-reduced-menu');
			} else {
				MASTHEAD.cache.body.removeClass('has-reduced-menu');
			}
		});



		// Overlays
		// ------------------------------------------------------------------
		$('.overlay__mobile-menu').on('click', () => {
			MASTHEAD.cache.body.toggleClass('has-navigation-active');
		});
		$('.overlay__search').on('click', () => {
			MASTHEAD.cache.body.toggleClass('has-search-active');
		});


		// Navigation menu
		// ------------------------------------------------------------------
		// Show the off canvas menu
		MASTHEAD.cache.masthead.on('click', '.js-toggle-offcanvas-menu', () => {
			MASTHEAD.cache.body.toggleClass('has-navigation-active');
			MASTHEAD.cache.body.removeClass('has-search-active');
		});


		// Search Dropdown toggle
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		MASTHEAD.cache.masthead.on('click', '.js-toggle-dropdown', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parents('.search__dropdown');

			if($el.hasClass('search__toggle') ) {
				MASTHEAD.cache.body.toggleClass('has-search-active');
				$parent.find('input[type=search]').focus();
			} else {
				MASTHEAD.cache.body.removeClass('has-search-active');
			}

			MASTHEAD.cache.body.removeClass('has-navigation-active');

			return false;
		});

		// Search field focus
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		MASTHEAD.cache.masthead.on('focus', '.search__input', () => {
			if (RESPONSIVE.isMD || RESPONSIVE.isLG) {
				if(MASTHEAD.cache.body.hasClass('has-standard-search')) {
					MASTHEAD.cache.body.addClass('has-search-active');
				}
			}
		});



		// Mobile Flyout menu
		// -----------------------------------------------------------
		var cascadeLevel = 1;
		MASTHEAD.cache.navigation.on('click', '.menu-item-has-children > .menu-main-link', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parent('li');

			// Force next navigation level to be shown
			$parent.addClass('is-expanded').siblings().removeClass('is-expanded');

			cascadeLevel++;
			MASTHEAD.cache.navigation.addClass('cascade-level-' + cascadeLevel);

      if (RESPONSIVE.isSM || RESPONSIVE.isXS) {
				return false;
			}

		});

		// Back Button - Mobile Flyout menu
		// -----------------------------------------------------------
		MASTHEAD.cache.navigation.on('click', '.js-menu-back-button', () => {
			MASTHEAD.cache.navigation.removeClass('cascade-level-' + cascadeLevel);
			cascadeLevel--;
			MASTHEAD.cache.navigation.addClass('cascade-level-' + cascadeLevel);

			return false;
		});


	}
};
