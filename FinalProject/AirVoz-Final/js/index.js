$(document).ready(function(){
  test=[];
  for(var i=0;i<=2;i++){
    test[i]=0;
  }

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
  });
  $("#owl-demo2").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigation : true,
      rewindNav : true,
      scrollPerPage : false,
  });
 //opening and closing the hamburger icon
  $('.menu-icon').click(function () {
    if ($('#navigator').css("left") == "-250px") {
        $('#navigator').animate({left: '0px'}, 250);
        $('.menu-icon').animate({left: '250px'}, 250);
        $('body').attr("id",'test');
        $('.box').attr('id','featuresAfterExpandingMenu');
        $('.features').attr('id','featuresAfterexpand');
        $('.menu-text').animate({left: '250px'}, 250).empty();
        //$("body").css("overflow", "hidden");
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
    $(this).toggleClass("on"); 
  });
      
  $(function() {
    $( "#datepicker" ).datepicker();
  });
  //Clicking on the twitter icon will display the twitter use case image
  $("#twitterClick").click(function(event){
    event.preventDefault();
    test[0]=1;
    $('.useCase').css('height','730px');
    $("#twitterClick").css("display","none");
    $("#twitterSecondClick").css("display","block");
  });
  // clicking on the twitter use case image will display the twitter icon
  $("#twitterSecondClick").click(function(event){
    event.preventDefault();
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
  // in case that email,password,username, confirm password and date values are not null the submit button will be displayed
  $("#email, #userName, #passWord, #datepicker, #confirmPassWord").on("change",function(){
  
    if($("#passWord").val()!=="" &&
       $("#userName").val()!=="" && 
       $("#passWord").val()!=="" && 
       $("#datepicker").val()!=="" && 
       $("#confirmPassWord").val()!==""){
           $("#submitSignupPage").css("display","inline-block");
    }          
  });
   //validating the email and password
  $("#validationForm").submit(function(event){
 
    var errorMessage="";
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };
    function isValidPassword(password){
      var validpass= /(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*\s).*$/;
      return validpass.test(password);
    };
    if(!isValidEmailAddress($("#email").val())){
      errorMessage="</br>Please enter a valid email address";
    //console.log(errorMessage);
    }
    if(!isValidPassword($("#passWord").val())){
      errorMessage="</br> Please enter a valid password <br/> A valid password contains at least 8 characters,one special character, one lowercase, one uppercase and one number";
    }
 
/*if ($("#passWord").val().length<8){

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
  }*/
  
    if($("#passWord").val() !== $("#confirmPassWord").val()){
      errorMessage=errorMessage+"<br/>please enter matching password";
      console.log(errorMessage);
    }
    if(errorMessage===""){
      alert("form has been submitted correctly");
    }
    else{
      $("#error").html(errorMessage);
      event.preventDefault();
    }
  });
});

  