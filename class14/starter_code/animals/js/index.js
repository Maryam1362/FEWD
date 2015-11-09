$(document).ready(function(){
	//variables
	var animals=["animal1.jpg","animal2.jpg","animal3.jpg","animal4.jpg","animal5.jpg","animal6.jpg","animal7.jpg"];
    var i=0;
    //Events
	$("#next").click(goToNextAnimal);
	$("#back").click(goToPreviousAnimal);
    //Functions
    function goToNextAnimal(){
       
       var nextAnimal;
       if(i===animals.length-1){
       	i=0;
       }
       else{
       i++;
       }
       nextAnimal=animals[i];
       $("#image-to-vote-on").attr("src","images/"+nextAnimal);


    }
	function goToPreviousAnimal(){
       var previousAnimal;
       if(i===0){
       	i=animals.length-1;  
      }
      else{
      i--;
      }
      previousAnimal=animals[i];
       $("#image-to-vote-on").attr("src","images/"+previousAnimal);
      

    }


});