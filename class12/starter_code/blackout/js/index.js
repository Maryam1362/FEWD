$(document).ready(function(){
  var light = 'on';
  $("#light_switch").click(switchLight);

  function switchLight(){
  	if(light==="on"){
  		$('body').css("background","black");
  		light='off';
  	}
  	else{
  	$('body').css("background",'yellow');
  	light="on";

  	}
  }

});


