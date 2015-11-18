$(document).ready(function(){
  console.log("test");
 //code goes here
 /*$('.CHANGE').click(changecolor);
 function changecolor(){
 	$('.halfPage').css('background-image','url(IMAGE/IMG2.jpg)');
 }*/
 //$("owl-buttons").click(showtext);
 //$(".featuresCircle1").click(showFeature1);
 $(".fancybox").fancybox();
 $('.fancybox').fancybox({'scrolling': 'no'});
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
   $("#owl-demo2").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
       navigation : true,
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
 
   $('.menu-icon').click(function () {
        if ($('#navigator').css("left") == "-250px") {
            $('#navigator').animate({left: '0px'}, 250);
            $('.menu-icon').animate({left: '250px'}, 250);
            $('body').attr("id",'test');
            $('.box').attr('id','featuresAfterExpandingMenu');
            $('.menu-text').animate({left: '250px'}, 250).empty();
            
          
        } 
        else  {
            $('#navigator').animate({left: '-250px'}, 250); 
            $(this).animate({left: '0px'}, 250);
            $('.menu-text').animate({left: '50px'}, 250).empty().text("Menu");
            $('body').attr("id",'test2');
            $('.box').removeAttr('id','featuresAfterExpandingMenu');

        } 
      });
  
    $('.menu-icon').click(function () {
              $(this).toggleClass("on"); });

    $(".legal a").click(function(){
      
    $(".legal a:visited").css("background","black");
    $(".legal a:visited").css("color","white");
    


      
    });   
    $(function() {
    $( "#datepicker" ).datepicker();
  });

});



  