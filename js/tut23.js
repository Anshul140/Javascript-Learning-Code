console.log("Welcome to tut-23 MATH OBJECTS");
let x =3;
let y = 6;
let z;

z = x/y;  ////0.5 - output

//Exploring the math object
z = Math;  //gives various math functions
z = Math.PI; //3.141592653589793 - output
z = Math.E;  //2.718281828459045 - output || e- is also known as Euler's Number
z = Math.round(5.5);  //6 - O/P
z = Math.ceil(5.4);   //6 - O/P || ceil means terrace(above) or value greater than 5.4
z = Math.floor(5.4);  //5 - O/P || floor means below or value smaller than 5.4
z = Math.floor(-5.4); //-6 -O/P || value smaller than -5.4
z = Math.ceil(-5.4);  //-5 
/*for better understanding of ceil floor
 4
 3
 2
 1
 0
-1
-2
-3
-4
-5   
-6

*/
z = Math.abs(-7.6);  //absolute value(-7.6) = 7.6
z = Math.sqrt(5);  //2.23606797749979 square root of 5
z = Math.pow(2,3); //8
z = Math.min(2, 3, 23, 45, 90, -90);  //-90
z = Math.max(2, 3, 23, 45, 90, -90);  //90
z = Math.random();  // will generate random numbers between 0 and 1
//for setting diferrent ranges
z = 100*Math.random(); //will generate random numbers between 0 to 100
z = 50 + (100-50)*Math.random();  //will generate random numbers between 50 to 100

//for generating numbers in integer form use floor and ceil functions
z = Math.ceil(50 + (100-50)*Math.random());  //will generate random numbers between 50 to 100

console.log(z);  

