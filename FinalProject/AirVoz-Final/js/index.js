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

$("#twitterClick").click(function(event){
    event.preventDefault();
    console.log("mytest");
    test[0]=1;
    $('.useCase').css('height','730px');
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
    $('.useCase').css('height','730px');
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
    $('.useCase').css('height','730px');
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

  $("#email, #userName, #passWord, #datepicker, #confirmPassWord").on("change",function(){
      console.log("test this");
      
      if($("#passWord").val()!=="" &&
         $("#userName").val()!=="" && 
         $("#passWord").val()!=="" && 
         $("#datepicker").val()!=="" && 
         $("#confirmPassWord").val()!==""){
 
              $("#submitSignupPage").css("display","inline-block");
      }
           
   });

$("#validationForm").submit(function(event){
 
  var errorMessage="";
  console.log(errorMessage);
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};
if(!isValidEmailAddress($("#email").val())){
  errorMessage="</br>Please enter a valid email address";
  console.log(errorMessage);
}

if ($("#passWord").val().length<8){

   errorMessage=errorMessage+"<br/>your password should have at least 8 characters ";

}
if ( $("#passWord").val().indexOf("!")===-1&&
  $("#passWord").val().indexOf('"')===-1&&
  $("#passWord").val().indexOf('#')===-1&&
  $("#passWord").val().indexOf('$') ===-1&&
  $("#passWord").val().indexOf('%')===-1&&
  $("#passWord").val().indexOf('&')===-1&&
  $("#passWord").val().indexOf('&')===-1&&
  $("#passWord").val().indexOf("'")===-1&&
  $("#passWord").val().indexOf('(')===-1&&
  $("#passWord").val().indexOf(')')===-1&&
  $("#passWord").val().indexOf('*')===-1&&
  $("#passWord").val().indexOf('+')===-1&&  
  $("#passWord").val().indexOf(',')===-1&&
  $("#passWord").val().indexOf('-')===-1&&
  $("#passWord").val().indexOf('.')===-1&&
  $("#passWord").val().indexOf('/')===-1&&
  $("#passWord").val().indexOf(':')===-1&&
  $("#passWord").val().indexOf(';')===-1&&
  $("#passWord").val().indexOf('<')===-1&&
  $("#passWord").val().indexOf('=')===-1&&
  $("#passWord").val().indexOf('=')===-1&&
  $("#passWord").val().indexOf('>')===-1&&
  $("#passWord").val().indexOf('?')===-1&&
  $("#passWord").val().indexOf('@')===-1&&
  $("#passWord").val().indexOf('[')===-1&&
  $("#passWord").val().indexOf('\\')===-1 &&
  $("#passWord").val().indexOf(']') ===-1 &&
  $("#passWord").val().indexOf('^')===-1&&
  $("#passWord").val().indexOf('_')===-1&&
  $("#passWord").val().indexOf('~')===-1&&
  $("#passWord").val().indexOf('`')===-1&& 
  $("#passWord").val().indexOf('{')===-1&&
  $("#passWord").val().indexOf('|')===-1&&
  $("#passWord").val().indexOf('}')===-1&& 
  $("#passWord").val().indexOf('$')===-1 &&
  $("#passWord").val().indexOf(')')===-1 &&
  $("#passWord").val().indexOf('{')===-1 &&
  $("#passWord").val().indexOf('}')===-1 &&
  $("#passWord").val().indexOf(';')===-1){
errorMessage=errorMessage+"<br/>please include a sepecial character in your passowrd";
    console.log(errorMessage);
  }
  
if($("#passWord").val() !== $("#confirmPassWord").val()){
    errorMessage=errorMessage+"<br/>please enter matching password";
    console.log(errorMessage);
}
if(errorMessage===""){
    alert("form has been submitted correctly");
    //onsubmit="setTimeout(function () { window.location.reload(); }, 10)";
    //window.location.reload();
}
else{

    $("#error").html(errorMessage);
     event.preventDefault();

}
});

  