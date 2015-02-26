$(function(){
	
	$('nav.header ul li').hover(function(){
		console.log('hover');
		$(this).children('ul').css('display','block');
	});

});