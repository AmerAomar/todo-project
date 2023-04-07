'use strict';

let userAnswers=[];
function addToArr(str)
{
    
userAnswers.push(str)

}


function arrElements(arr){
for(let i =0; i <arr.length;i++ )
{
console.log(arr[i]);
}

}







var title1;


let userName=prompt("Hello, this webpage  will open after gathering some data\nPlease enter your Name:");


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

/* here I will continue the work */

/***********the first question*********** */
let q1;
let q2;
let q3;

let val1=prompt("Are You a New User?\nthe answer should be:(yes or no)")
if(val1=="yes")
{
    q1="new-user";
    
}
else if (val1=="no")
 {

    q1="already-user";
  } 
  else if(val1==null)
  {
     q1="invalid"
  }
  else
   {
    q1="invalid";
  }

  let container1=addToArr(q1);
  container1=userAnswers;
  /*console.log(container1);*/

  /********** second question **********/

  let val2=prompt("Do you want to share your information in order to build the schedule of tasks?\nYour information will not be shared\nthe answer should be:(yes or no) ")
if(val2=="yes")
{
    q2="will-share";
    
}
else if (val2=="no")
 {

    q2="problem-with-sharing";
  } 
  else if(val2==null)
  {
     q2="invalid"
  }
  else
   {
    q2="invalid";
  }

  let container2=addToArr(q2);
  container2=userAnswers;
  /*console.log(container2);*/

  /********* third question **********/

  let val3=prompt("Do you find that this website meets aspirations in scheduling your tasks\nthe answer should be:(yes or no) ")
if(val3=="yes")
{
    q3="meets-aspirations";
    
}
else if (val3=="no")
 {

    q3="dont-meet";
  } 
  else if(val3==null)
  {
     q3="invalid"
  }
  else
   {
    q3="invalid";
  }

  let container3=addToArr(q3);
  container3=userAnswers;
  /*console.log(container3);*/

  console.log(userAnswers);

  /*******Traverse the array and print the items on the console *******/

  arrElements(userAnswers);