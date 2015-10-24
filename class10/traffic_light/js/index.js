//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){
 //code goes here
 $('#stopButton').click(illuminateStopLightRed);
 $('#slowButton').click(illuminateStopLightYellow);
$('#goButton').click(illuminateStopLightGreen);
 function illuminateStopLightRed(){
 	clearLights();
 	$('#stopLight').css('backgroundColor','red');
 }
 function clearLights(){
 	$('.bulb').css('backgroundColor','black');
 }
 function illuminateStopLightYellow(){
 	clearLights();
 	$('#slowLight').css('backgroundColor','Yellow');
 }
 function illuminateStopLightGreen(){
 	clearLights();
 	$('#goLight').css('backgroundColor','Green');
 }
});

