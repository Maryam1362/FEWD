$(document).ready(function(){
 //code goes here
 /*$('.CHANGE').click(changecolor);
 function changecolor(){
 	$('.halfPage').css('background-image','url(IMAGE/IMG2.jpg)');
 }*/
 //$("owl-buttons").click(showtext);
 //$(".featuresCircle1").click(showFeature1);
   $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
       navigation : true,
        navigationText : ["<",">"],
        rewindNav : true,
        scrollPerPage : false,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
   /*function showFeature1(){
    $(".featuresCircle1").css("background", "url(js/test.jpg)");
    console.log('test');
   }*/
 
});
