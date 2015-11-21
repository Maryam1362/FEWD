$(document).ready(function(){
  console.log("test");
  test=[];
  for(var i=0;i<=2;i++){
    test[i]=0;
  }
   a=0;
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
            $('.features').attr('id','featuresAfterexpand');
            $('.menu-text').animate({left: '250px'}, 250).empty();
            
        
        } 
        else  {
            $('#navigator').animate({left: '-250px'}, 250); 
            $(this).animate({left: '0px'}, 250);
            $('.menu-text').animate({left: '50px'}, 250).empty().text("Menu");
            $('body').attr("id",'test2');
            $('.box').removeAttr('id','featuresAfterExpandingMenu');
            $('.features').removeAttr('id','featuresAfterexpand');
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
    /*var test=[];
   test[1] =$("#email").val();
   test[2] =$("#passWord").val();
   test[3] =$("#userName").val();
   test[4] =$("#datepicker").val();*/
  
   $("#email, #userName, #passWord, #datepicker").on("change",function(){
      console.log("test this");
      
      if($("#passWord").val()!=="" &&
         $("#userName").val()!=="" && $("#passWord").val()!=="" && $("#datepicker").val()!=="" ){

       console.log("test value");

      $("#submitSignupPage").css("display","inline-block");
     

      }
      if(test.indexOf('@') === -1){
                                
         alert("not a valid email, please eneter a valid email");
               }  
        if(test2.indexOf('@') === -1 || 
          test2.indexOf('#') === -1 || 
          test2.indexOf('$') === -1 || 
          test2.indexOf('%') === -1 ||
          test2.indexOf('^') === -1 ||
          test2.indexOf('&') === -1 ||
          test2.indexOf('*') === -1 ||
          test2.indexOf('(') === -1 ||
          test2.indexOf(')') === -1 )
                                   {
         console.log(test);                           
         alert("please include special characters in your passcode");
               }               
   });

$("#twitterClick").click(function(event){
    event.preventDefault();
    console.log("mytest");
    test[0]=1;
    $('.useCase').css('height','800px');
    $("#twitterClick").css("display","none");
    $("#twitterSecondClick").css("display","block");
   
});

$("#twitterSecondClick").click(function(event){
    event.preventDefault();
    console.log("mytest");
    test[0]=0;
    $("#twitterSecondClick").css("display","none");
    $("#twitterClick").css("display","block");
    if(test[0]===0 && test[1]===0 && test[2]===0){
      $('.useCase').css('height','300px');
    }
});

$("#instagramClick").click(function(event){
    event.preventDefault();
    test[1]=1;
    $('.useCase').css('height','800px');
    $("#instagramClick").css("display","none");
    $("#instagramSecondClick").css("display","block");
  
});

$("#instagramSecondClick").click(function(event){
    event.preventDefault();
    test[1]=0;
    $("#instagramSecondClick").css("display","none");
    $("#instagramClick").css("display","block");
    if(test[0]===0 && test[1]===0 && test[2]===0){
      $('.useCase').css('height','300px');
    }
});
$("#faceBookClick").click(function(event){
    event.preventDefault();
    console.log("mytest");
    test[2]=1;
    $('.useCase').css('height','800px');
    console.log("test[2] : " + test[2]);
    $("#faceBookClick").css("display","none");
    $("#faceBookSecondClick").css("display","block");
});

$("#faceBookSecondClick").click(function(event){
    event.preventDefault();
    console.log("mytest");
    test[2]=0;
    console.log("test[2] : " +test[2]);
    $("#faceBookSecondClick").css("display","none");
    $("#faceBookClick").css("display","block");
    if(test[0]===0 && test[1]===0 && test[2]===0){
        $('.useCase').css('height','300px');
    }
});


 
  
  
   
});



  