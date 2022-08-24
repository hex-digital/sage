export const HEX = {
	cache : {},
	updateCache : ($) => {
		HEX.cache = {
			body: 		$('body'),
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

	}
};
