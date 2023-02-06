'use strict';
var title1;


let userName=prompt("Hello, this webpage  will open after gathering some data\nPlease enter your Name:");
console.log(userName);

var userGender=prompt("Next step\nPlease enter your Gender carefully (male,female)");

if(userGender !== "male" && userGender !== "female" )
{
    alert("please enter your Gender carefully");
    userGender=prompt("Please enter your Gender (male,female)");
    if(userGender == "male" || userGender == "female")
    {
        alert("Correct input!");
    }

    
} 
    
    else{
       alert("Correct input!");

    }

    
/*var val = confirm("choose your Gender");
if (val == true) {
alert("male");
} else {
alert("female");
}
*/

var userAge=prompt("Enter your Age");
if(userAge <=0)
{
    alert("Invalid Age");
    userAge=prompt("Please re-enter your Age");
}
switch(userGender)
{
    case "male":
        title1="Mr";
        break;
        case "female":
        title1="Ms";
        break;
        default:
            title1="";
}
var val=confirm("Do you want to skip the welcoming message?\n click ok to skip \n click cancel to continue")
if(val==true)
{
    alert("you are about to skip the welcoming message")
}
if(val==false)
{
    alert("welcome" + " "+ title1 +" "+ userName +" "+"to my website!")
}