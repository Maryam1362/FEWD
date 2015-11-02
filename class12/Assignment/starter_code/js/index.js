

$(document).ready(function(){


    $('#submit-btn').click(changeBackground);  //the changeBackground function will be run after clicking the submit button

    function changeBackground(event){
    	event.preventDefault();  //Prevent a form submission 
    	var city=$('#city-type').val();  //Assign the user input value to a var which is called city
        // if city  is equal to NYC or New York City or New York then assign the nyc class to body selector.

    	if(city==='NYC' || city==='New York City' || city==='New York'){

    	  $( "body" ).attr('class','nyc');
		}
    	
        // if city  is equal to SF or Bay Area or San Fracisco then assign the sf class to body selector.
    	else if(city==="SF" || city==="Bay Area" || city==="San Fracisco"){
    		$( "body" ).attr('class','sf');
    	}
        // if city  is equal to LAX or Los Angeles or LA then assign the la class to body selector.
    	else if(city==="LA" || city==="LAX" || city==="Los Angeles"){
    		$( "body" ).attr('class','la');
    	}
        // if city  is equal to Austin or ATX then assign the austin class to body selector.
    	else if(city==="Austin" || city==="ATX"){
    		$( "body" ).attr('class','austin');
    	}
       // if city  is equal to Sydney or SYD then assign the sydney class to body selector.
    	else if(city==="Sydney" || city==="SYD"){
    		$( "body" ).attr('class','sydney');
    	}
        // else alert user to enter a valid city.
        else{
            alert("Please enter one of the valid cities, valid cities are: LA, SF, NYC, ATX and SYD");
        }

   }
	
});