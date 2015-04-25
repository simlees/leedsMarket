$(function(){
	
	$('ul.stall-tabs > li').click(function(){
		$('ul.stall-tabs > li.active').removeClass('active');
		$(this).addClass('active');
		var selected = $(this).attr('rel');

		//Hide current content
		$('ul.stall-box-content li.active').hide();
		$('ul.stall-box-content li.active').removeClass('active');
		$('ul.stall-box-content li#'+selected).show(0, function(){
			$(this).addClass('active');
		});
		
		
		console.log(selected);
	});

});