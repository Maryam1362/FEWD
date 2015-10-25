
$(document).ready(function(){
 	$('.readmore').click(showText); 
 	$('.readless').click(hideText);
 	$('.learnmore').click(slideText);
 	function showText(){
 		$('#show-this-on-click').slideDown();
 		$('.readless').show();
 		$('.readmore').hide();
 	}
 	function hideText(){
 		$('#show-this-on-click').slideUp();
 		$('.readmore').show();
 		$('.readless').hide();
 	}
 	function slideText(){
 		$('#learnmoretext').slideDown();
 		$('.learnmore').hide();
 	}	
});

