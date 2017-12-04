var Kinds = (function(){
	
	var
		height_title_kinds = $('section.kind-of-works-main ul li h3'),
		overlay_title_kinds = $('.alph'),
		len = $('.kind-of-works-main li').length,

		handlers = function(){			
			for (var i = 0; i < len; i++){
				var nHeight = $(height_title_kinds[i]).height();
				$(overlay_title_kinds[i]).css({height: Math.round(nHeight) + "px", 'padding-top':'.5rem', 'padding-bottom':'.5rem'});
			}
		},

		init = function(){
				handlers();
		};
		
		$(window).on('resize', $.throttle(500, handlers));

	init();
});