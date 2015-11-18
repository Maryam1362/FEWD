// This function picks a move for the computer!

$(document).ready(function(){

function computerMove(){
  var moves = ['rock', 'paper', 'scissors'];
  var choice = Math.round(Math.random() * 2);
  return moves[choice];
}

var myChoice;


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
$('#rock, #paper , #scissors').click(function () {
    if (this.id === 'rock') {
        myChoice="rock";
        console.log(computerMove()+ " this is computer move");
        compare(myChoice,computerMove());
    }
    else if (this.id === 'paper') {
        myChoice="paper";console.log(computerMove()+ "this is computer move");
        console.log(computerMove()+ " this is computer move");
         compare(myChoice,computerMove());
    }
    else{
    	myChoice="scissors";
    	console.log(computerMove()+ "this is computer move");
    	compare(myChoice,computerMove());
    }
});

 

 //compare(myChoice,computerMove());
 //console.log(computerMove()+ " here is computer choice");

 function compare(MChoice,CChoice){
  	console.log("what?");
  	console.log(CChoice+ "is computer choice");
  	console.log(MChoice+ "is my choice");
  if((MChoice === CChoice)){
  	alert(" this is tie,make another choice");
  	
  }
  else if(MChoice ==="paper" && CChoice==="scissors"){
  	$("span").html("com");
  }
  else if(CChoice ==="paper" && MChoice==="scissors"){
  	$("span").html("Me");
  }
  else if(CChoice ==="paper" && MChoice==="rock"){
   $("span").html("com");
 }
 else if(MChoice ==="paper" && CChoice==="rock"){
   $("span").html("Me");
 }
}

});
