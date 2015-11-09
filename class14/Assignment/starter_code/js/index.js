

$(document).ready(function(){
    var city=["NYC", "SF", "LA", "ATX", "SYD"]; //Defining an an array for cities
    var i;
    for(i=0;i<city.length;i++){  // creating a loop to append each city to the drop down list
    	
    	$('#city-type').append("<option>"+ city[i]+"</option>");
    }

    $('#city-type').change(changeBackground);  //The changeBackground function will capture user actions.

    function changeBackground(event){
    	event.preventDefault();  //Prevent a form from submission 
    	   
    	   var cityChoice= $("#city-type").val(); //Get the value of user input and assign it to the cityChoice variable.

        // if city  is equal to SF then assign the sf class to the body selector.

    	if ( cityChoice==="SF"){
    		$("body").attr("class","sf");
    		
    	}

    	// else if city  is equal to NYC then assign nyc class to the body selector.
    	else if ( cityChoice==="NYC"){
    		$("body").attr("class","nyc");
    	
    	}
    	// esle if city  is equal to LA then assign la class to the body selector.
    	else if ( cityChoice==="LA"){
    		$("body").attr("class","la");
    		
    	}
    	// if city  is equal to ATX then assign austin class to the body selector.
    	else if ( cityChoice==="ATX"){
    		$("body").attr("class","austin");
    		
    	}
    	// if city  is equal to SYD then assign sydney class to the body selector.
    	else if ( cityChoice==="SYD"){
    		$("body").attr("class","sydney");
    		
    	}

    	//else alert user to select a city from the drop down list
    	else{
    		alert("please select a city from the drop down list menu");
    	}
    
    }
});