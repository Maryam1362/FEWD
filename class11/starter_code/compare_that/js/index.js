$(document).ready(function(){
	
$("#submit").click(compareNum);

 function compareNum(){
 	var num1=$('#a').val();
 	var num2=$('#b').val();
 	if(num1===num2){
 		$("#comparison").text("=");
 	}
 	else if(num1>num2){
 		$("#comparison").text(">");
 	}
 	else if(num2>num1){
 		$("#comparison").text("<");
 	}
 	else{
 		$('#comparison').text("error");
 	}
 }	
});	