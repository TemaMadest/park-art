var YouCan = (function() {
	
	var $yc = $(".you-can"),
		$yc_items = $(".you-can__layout"),
		$close_left = $(".left-close"),
		$close_right = $(".right-close"),
		state = [false, false],
		// state[0] - состояние левой части
		// state[1] - состояние правой части
	
	fakeScroll = function() {
		$yc.removeClass("js-scroll-animate");
	},
	
	close = function(e, g) {
		
		//var i = $(e.currentTarget).index();
		
		//if (state[g]) {
			$yc_items.removeClass("active");
			setTimeout(function() {
				$yc_items.removeClass("step-2-transition");
				state[g] = false;
			}, 1000);
			
		//}
		
	},
	
	click = function(e) {
		
		var i = $(e.currentTarget).index();
		
		//console.log($close_left.filter(e.currentTarget).length);
		
		if (( !$close_left.filter(e.currentTarget).length ) && (!state[i])) {
		
			var x = $(".step-2-transition");
			$yc_items.removeClass("active");
			setTimeout(function() {
				x.removeClass("step-2-transition");
			}, 1000);
			$(e.currentTarget).addClass("active");
			setTimeout(function() {
				$(e.currentTarget).addClass("step-2-transition");
				state[i] = true;
			}, 1000);
			
		}
		
	},
	
	init = function() {
		
		setTimeout(function() {
			fakeScroll();			
		}, 500);
		
		
		$yc_items.on("click", click);
		$yc_items.on("mouseleave", function(e) {
			var i = $(e.currentTarget).index();
			close(e, i);
		});
		$close_left.on("click", function(e) {
			if ($close_left.filter(e.currentTarget).length) {
				close(e, 1);
			}
		});
		$close_right.on("click", function(e) {
			if ($close_right.filter(e.currentTarget).length) {
				close(e, 0);
			}
		});
		
	};
	
	return {init: init};
	
}());