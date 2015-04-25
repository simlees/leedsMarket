$(function(){

	$(document).on('click', function(event) {

		if ($(event.target).closest('div#top-nav ul > li > a').length) {
			event.preventDefault();
			$('div.submenu').css('display','none');
			var menu = $(event.target).closest('div#top-nav ul > li > a').attr('id');
			console.log(menu);
			$('nav#header div#'+menu+"-menu").css('display','inline-block');
		}
		else if ($(event.target).closest('div.submenu').length){
			console.log("submenu");
		} else {
			$('div.submenu').css('display','none');
		}
	  
	});

});