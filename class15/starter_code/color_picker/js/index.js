$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}

//after refactoring


$('li').click(switchBackgroundColor);
function switchBackgroundColor(){

	var buttonClassName= $(this).attr("class");   //we are getting the background color with .css
     $("body").attr("class",buttonClassName);
}