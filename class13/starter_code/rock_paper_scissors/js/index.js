// This function picks a move for the computer!
function computerMove(){
  var moves = ['rock', 'paper', 'scissors'];
  var choice = Math.round(Math.random() * 2);
  return moves[choice];
}

/*
Write javascript code to:
1 - Handle the player clicking on an option
2 - Get a new move from the computer each time (call the above function)
3 - Figure out who the winner is
4 - Display who won and what the moves were

REMINDERS:
- Try to keep your code DRY
- Make use of functions that can take arguments
*/
function myChoice(){
var rock = $('#rock').click();
var paper= $('#paper').click();
var scissors=$('#scissors').click();
 if(rock==="true"){
 	return rock;
 }
 if 
}