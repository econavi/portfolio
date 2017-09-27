var slidingСard = $('.sliding-card');

slidingСard.on('click', function(e) {
	var target = $(e.target);
	
	if(target.is('.sliding-card__toggle')) {
		console.log( $(this).children() )

		var toggle = $(this).children('.sliding-card__toggle');
		var hiddenСontent = $(this).children('.sliding-card__hidden-content');
		
		hiddenСontent.animate({
			opacity: 'toggle',
			height: 'toggle',
		}, {
			duration: 400
		});

		toggle.toggleClass('sliding-card__toggle_down');
		toggle.toggleClass('sliding-card__toggle_up');
	};

});