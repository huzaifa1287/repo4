//chapter 21-25 task 1-18

function task1(){
var firstName = prompt("Enter your First name :");
var lastName = prompt("Enter your Last name :");
var fullName = firstName + lastName ;

alert("Hey " + fullName + " Welcom to our Website");

}


function task2(){
    var favMobile = prompt("Enter your Favourite Mobile Phone Model :");
  var length = favMobile.length;
    
 document.write("My Favourite Phone is : " +favMobile);
 document.write("<br/>");
 document.write("Length of String : " +length);   
    }


function task3(){
var str = "Pakistani";
var indx = str.indexOf("n");
document.write("String : " +str);
 document.write("<br/>");
 document.write("Index of String : " +indx);   
}

function task4(){
    var str = "Hello World";
    var indx = str.lastIndexOf("l");
    document.write("String : " +str);
     document.write("<br/>");
     document.write("Last Index of \'l\' : " +indx);   
}

function task5(){
    var str = "Pakistani";
    var char = str.charAt(3);
    document.write("String : " +str);
     document.write("<br/>");
     document.write("character at index 3 : "+ char);   
}

function task6(){
    var firstName = prompt("Enter your First name :");
    var lastName = prompt("Enter your Last name :");
    var fullName = firstName.concat(" " +lastName);
    
    alert("Hey " + fullName + " Welcom to our Website");
    
    }

function task7(){
var str = ("Hyderabad");
var rep = str.replace("Hyder","Islam"); 
document.write("City : " +str);
document.write("<br/>");
document.write("After Replacement: "+ rep);   
}

function task8(){
var message = "Ali and Sami are best friends. They play cricket and football together";
    var rep =message.split("and").join("&");
    document.write("City : " + message);
    document.write("<br/>");
    document.write("After Replacement: "+ rep);   
   
    }

    function task9(){
        var str = "472";
        document.write("Value : " +str);
        document.write("<br/>");
        document.write("Type : " +typeof(str));
        document.write("<br/>");
        var conversion = parseInt(str);
        document.write("Value : " + conversion);
        document.write("<br/>");
        document.write("Type : " +typeof(conversion));

}

function task10(){
    var userInput = prompt("Enter Something");
    document.write("User Input : " +userInput);
    document.write("<br/>");
    document.write("Upper Case : " + userInput.toUpperCase());

}

function task11(){

    var userInput = prompt("Enter String :");
    userInput = userInput.toLowerCase().split(' ');
    document.write("splt " + userInput);
    document.write("<br/>");
        for (var i = 0; i < userInput.length; i++) { 
         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
        } 
       userInput = userInput.join(' ');
        document.write(userInput); 

}

function task12(){

    var num = 35.36;
 var str = num.toString();
   str = str.split(".");
   str = str.join("");
    document.write("Number : "+ num);
    document.write("<br/>");
    document.write("Result : "+ str);
}

 
function task13(){
  var userName= prompt("Enter your Input: ");
    var split=[];
    var arr=[];
    for(var i=0;i<userName.length;i++)
    {
        split[i]=userName.split(" ");
        arr[i]=userName.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            for(var i=0;i<userName.length;i++)
            {
                split[i]=userName.split("&nbsp;");
                arr[i]=userName.charCodeAt(i);
                if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
                {
                    break;
                }
            }
        }
    
    }
    alert(message);
}


function task14(){
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What you want to order from Bakery ABC :");
 for(i=0; i < A.length; i++){
    if(userInput.toLowerCase() === A[i]){
        document.write(userInput + " is available in our Bakery at index :" + i+"<br>");
        break;
    }
    
 }//loop
 if(userInput.toLowerCase() !== A[i]) {
    document.write("We are Sorry " + userInput + ".  is not available in our Bakery <br>");
   
}
}


function task15(){
   
var Input = prompt("Enter your Password to validate");
var pass=  /(?=.*[a-z]\d).{6,}/ ;
var pass1= /(?=.*\d[a-zA-Z]).{6,}/;
if(Input.match(pass)){
    alert("Password is validated");
}else if(Input.match(pass1)){

    alert("Password can not begin with a number");
}else{

    alert("Please Enter a Valid Password");
}
}


function task16(){
var university ="University of Karachi";
for(var i =0 ; i < university.length;i++){
var arr = university[i].split("",1);
document.write(arr +"<br>");
}
    }
    
function task17(){
    var inp = "Pakistan";
    var lastChar = inp.charAt(inp.length-1);
    document.write("User Input: "+inp + "<br>");
    document.write("Last Char of Input: "+lastChar);
}

function task18(){
    var text ="The quick brown fox jumps over the lazy dog";
  var sp = text.toLowerCase().split('the').length-1;
  document.write("Text: "+text);
  document.write("<br>");
    document.write("There are "+sp +" occurence(s) of word 'the' ");
        }







// chapter 26-30 task 1-8
function task1(){
var integer = +prompt("Enter a positive integer Value");
if( integer >= 0){
document.write("Number: " +integer);
document.write("<br>");
document.write("Round off Value: " + Math.round(integer));
document.write("<br>");
document.write("Floor Value: " + Math.floor(integer));
document.write("<br>");
document.write("Ceil Value: " + Math.ceil(integer));
}else{

    alert("please Enter Positive Integer Value !!");
}

}

function task2(){
    var integer = +prompt("Enter a Negative integer Value");
    if( integer <= 0){
    document.write("Number: " +integer);
    document.write("<br>");
    document.write("Round off Value: " + Math.round(integer));
    document.write("<br>");
    document.write("Floor Value: " + Math.floor(integer));
    document.write("<br>");
    document.write("Ceil Value: " + Math.ceil(integer));
    }else{
    
        alert("please Enter Negative Integer Value !!");
    }
    
    }
    
function task3(){
    var num = +prompt("Enter number to check its absolute value");
    var abs = Math.abs(num);
document.write("The absolute value of " + num +" is " + abs);
    }


function task4(){
document.write("Random Dice Value: " + (1+ Math.floor(Math.random()*6)));
document.write("<br/>");
document.write("Random Dice Value: " +  (1+ Math.fl(Math.random()*6)));
}

function task5(){
    var coin = 1 + Math.floor(Math.random()*2);
if(coin === 1){
    document.write(coin);
    document.write("<br>");
    document.write("Random coin Value: Tails");

}else if(coin===2){
    document.write(coin);
    document.write("<br>");
    document.write("Random coin Value: Heads"  );
} else{

    document.write("coin can only have two sides");
}

}


function task6(){
   
    var num = Math.ceil(Math.random()*(100-1)+1);
    document.write("random number between 1  and 100: " +num );
   
}

function task7(){
var weight = prompt("Enter Your weight in kilograms");
weight = parseFloat(weight);
document.write("The Weight of User is " + weight + " kilograms");
     
}


function task8(){
   var num = +prompt("Enter a number between 1 & 10");
    var secret = Math.ceil(Math.random()*(10-1)+1);
   
    if(num === secret){
  
        alert("Congratulations you've Guessed a right number");
    }
    else{
        alert("try again !!");
    }
   
}







// chapter 31-34 task 1-14
function task1(){
var date = new Date();
document.write(date);
}

function task2(){
    var date = new Date();
    var months = ["January","Ferburary","March","April","May","June","July","August","September","October","November","December"];
    var month = date.getMonth();
        document.write("Current Month:" + months[month]);
    }

    function task3(){

        var date = new Date();
        var day = +date.getDay();
       switch(day){
           case 0:
            alert("Today is Sun");
            break;
            case 1:
            alert("Today is Mon");
            break;
            case 2:
            alert("Today is Tue");
            break;
            case 3:
            alert("Today is Wed");
            break;
            case 4:
            alert("Today is Thu");
            break;
            case 5:
            alert("Today is Fri");
            break;
            case 6:
            alert("Today is Sat");
            break;
            default:
                alert("out dated");
                break;
       } 


    }

    function task4(){

        var date = new Date();
        var day = +date.getDay();
      if(day === 0 || day === 6){
          document.write("It's Funday");

      }else{
        document.write("not a funday it's a working day")

      }

    }

    function task5(){

        var date = new Date();
        var day = +date.getDate();
     
      if(day < 16){
       
        document.write("First Fifteen Days of the Month");

    }else{
      document.write("Last Days of the Month");

    }

    }

    function task6(){

        var date = new Date();
        var odate = new Date(0);
        var mili =  date - odate;

     document.write("Current:"+date+"<br>");
     document.write("Elapsed Milliseconds since January 1,1970: "+mili+"<br>");
     document.write("Elapsed Minutes since January 1,1970: "+mili /1000/60);
    }

    function task7(){

        var date = new Date();
        var hrs = date.getHours();
        if (hrs >= 12)
     document.write("It's PM");
     else{
        document.write("It's AM");

     }
    }

    function task8(){

        var date = new Date(2020,11,31);
     
     document.write("Later Date: "+ date);
     
    }

    function task9(){

        var sdate = new Date(2020,3,24);
        var cdate = new Date();
        var days =  cdate - sdate;
         days = Math.floor(days /(1000 * 3600 * 24));
     document.write( days+ " Days has passed Since 1st Ramdan 2020 ");
     
    }

    function task10(){

        var refd = new Date(2015,11,05,22,50,16);
        var begd = new Date(2015,0,1);
        var diff = refd - begd;
        diff = diff /60000;
           document.write("On Ref Date: " + refd +"<br>");
           document.write(Math.ceil(diff)+ " Seconds has Passed Since Beginning of 2015");
     
    }

    
    function task11(){

       var cdate = new Date(2015,11,5,23,8,16);
       document.write(cdate);
       cdate.setHours(23-1);
       document.write('<br>');
       document.write("1 Hour Ago, it Was "+cdate);
     
    }

    function task12(){

        var cdate = new Date(2015,11,5,23,9,37,);
        var year = cdate.getFullYear();
        document.write(cdate);
        cdate.setFullYear(year - 100);
        document.write('<br>');
        document.write("100 Years Back, it Was "+ cdate);
      
     }

     function task13(){

        var age = +prompt("Enter Your Age");
        var date = new Date();
        var year = date.getFullYear();
        var ac = +(year-age);
        document.write("your age is:"+age);
        document.write("<br>");
        document.write("your birth year is:"+ac);
      
     }

     function task14(){
        var months = ["January","Ferburary","March","April","May","June","July","August","September","October","November","December"];
        var cName = prompt("Enter Customer Name: ");
        var cMonth = months[new Date().getMonth()];
        var nUnits = +prompt("Enter number of units: ");
        var cperUnit = +prompt("Enter Charges per units: ");
        var nApay = nUnits * cperUnit;
        var latePaySur = 350;
        var gApay = nApay + latePaySur;
        document.write("<h1>K-Electric Bill </h1>");
        document.write("Customer Name: "+cName);
        document.write("<br>");
        document.write("Month: "+cMonth);
        document.write("<br>");
        document.write("Number of Units: "+nUnits);
        document.write("<br>");
        document.write("Charges Per Unit: "+cperUnit);
        document.write("<br>");
        document.write("<br>");
        document.write("Net Amount Payable (Within Due Date): "+nApay);
        document.write("<br>");
        document.write("Late Payment Surcharge: "+latePaySur);
        document.write("<br>");
        document.write("Gross Amount Payable (After Due Date): "+gApay);
     }









    // chapter 35-38 task 1-14
function task1(){
   // function that displays current Date & TIme
    function currentDateAndTime(){
        var date = new Date();
        document.write(date);
    }
    currentDateAndTime();
}

function task2(){
    // function that displays current Date & TIme
     function greet(first,last){
        return document.write("Welcome Dear: " + first + " " + last);
     }
     greet("Adeel","Khan");
     }
    
function task3(){
    // function that add two numbers & return Result
     function Add(num1,num2){
        return document.write("Addition is: " + (num1 + num2));
     }
    Add(3,5);
     }

function task4(){
    // function for calculator via operator
     function calc(num1,op,num2){
      switch(op){
        case "+":
            return document.write("Addition is: "+ (num1 + num2));
            break;
        
        case "-":
            return document.write("Subtraction is: "+ (num1 - num2));
            break;

        case "*":
            return document.write("Multiplication is: "+ (num1 * num2));
            break; 
        
        case "-":
            return document.write("Division is: "+ (num1 / num2));
            break; 

        default: 
        return document.write("Please Enter Correct Operator");
        break;
      }
    }
    calc(9,"+",5);
}

function task5(){
    // function for square
     function square(num){
     return document.write("Square of num is: "+ (num * num));
    }
    square(4);
     }

function task6(){

   function fac(n) {
    return (n != 1) ? n * fac(n - 1) : 1;
  }
  
 document.write("Factorial of num is: "+ fac(4) );


}

function task7(){

    function counting(start,end) {
   
for(start; start <= end ; start++){


document.write("Counting : --> "+ start);
document.write("<br>");

}



   }
  counting(1,20);
 
 }


 function task8(){

function calculateHypotenuse(b,p) {
    function square(x) { return x*x; }
    return Math.sqrt(square(b) + square(p));
 }

    
    document.write ( "Hyptenuse: of a right angle triangle: "+ calculateHypotenuse(3,4) );
 
    
 }

 function task9(){

 function area(width,height){

    return document.write("Area of Rectangle is: " + (width * height));


 }
 area(10,20);

 }

 function task10(){

    function pali(str){
      str = str.toLowerCase()
      var rev =  str.split("").reverse().join("");
   
       if(str === rev){

        document.write(str+"--> is a palindrome word <br> its Reverse is same as : --> "+rev);
       } else{

        document.write("not palindrome");
       }
   
    }
    pali("aka");


}

function task11(){
function capitalizer(str){
    
var words = str.split(" ");

for (i = 0; i < words.length; ++i) {
    words[i] = String.fromCharCode(words[i].charCodeAt(0)-32)+words[i].substring(1);
}

document.write(words.join(" "));


}

capitalizer("the quick brown fox");
}

function task12(){

    function longestWord(str){
        
    var words = str.split(" ");
    var long = 0;
    for (i = 0; i < words.length;i++) {
   
        if(long < words[i].length){
        
   long = words[i].length;
   str = words[i];
   
    }
    

    }
   
    return document.write(str);
 }
 longestWord("Web Development tutorial");
}

function task13(){

function occur(str,letter){
 var count = str.split(letter).length-1;

 return document.write("Occuerence of letter : "+letter+ " is "+count);

}
occur("JSResourceS.coM","s");

}

function task14(){

    function calcCircumference(radius){
      radius = 2*Math.PI*radius;
     return document.write("Circumference of Circle: "+radius.toFixed(3));
    
    }
    function calcArea(radius){
        radius = Math.PI* radius * radius;
       return document.write("Area of Circle: "+radius.toFixed(3));
      
      }
      
      calcCircumference(14);
      document.write("<br>");
      calcArea(14);

    
    } 
