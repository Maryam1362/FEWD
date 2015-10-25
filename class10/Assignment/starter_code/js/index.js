
$(document).ready(function(){
 //code goes here
 $('.readmore').click(showText); 
 $('.readless').click(hideText);
 $('.learnmore').click(slideText);
//Show the text using show() or SlideDown();
 function showText(){
 	$('#show-this-on-click').slideDown();
 	$('.readless').show();
 	$('.readmore').hide();
 	//$('.hide').slideDown();
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

