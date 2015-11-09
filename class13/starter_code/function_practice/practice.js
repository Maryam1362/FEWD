
  /* Turn the following statements into javascript statements and functions. These are not in context to any html or css.


    1.  Write a function that logs in the console 7 as a string. Take the same string and make it a number - also log the result. Finally, add them together and log the result.


    2.  Write a function that returns the string "foo".

    3.  Write a function that logs to the console "Today is" and a day of the week that is passed to your function in an argument (dayName). Call your function and make it run. 

    4.  Write a function that takes two number arguments (num1 and num2). The function should add those 2 numbers and return the result.

    5.  Write a function that takes two number arguments (num1 and num2). The function should multiply those 2 numbers and return the result.

    BONUS: Write a function that takes one argument (num). Make the function return true if that number is even and return false if it's odd.

   */


 function addStringAndNum(){
 	var sevenString="7";
 	console.log('as a string:'+ sevenString);
 	var sevenNum = parseInt(sevenString);
 	console.log(sevenNum);
    var addValues=sevenString+sevenString;
    console.log(addValues);
 }
function stringR(){
	var name = 'foo';
	return name;
}
stringR();

function todayDate(dayName){
  console.log("Today is " + dayName);

}

todayDate('Monday');

function addTwoNumbers(num1,num2){

	var num= num1+num2;
	return num;

}
addTwoNumbers(4,-2);

function multiplyTwoNumbers(num1,num2){

	var num= num1*num2;
	return num;

}
multiplyTwoNumbers(8,-2);
