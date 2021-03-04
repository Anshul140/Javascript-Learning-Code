//JS type conversion & type Coercion
console.log('Welcome to Tut5');
let myVar;
myVar = String(34);
// console.log(myVar, typeof myVar);

// let booleanVar = true;
let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);

let date = String(new Date());
// console.log(date, typeof date);

// let arr = [1,3,4,6,7];
let arr = String([1,3,4,6,7]);
console.log(arr.length, (typeof arr));

let i= 90;
// console.log(i.toString());

let stri = Number('3434');
stri = Number('343d56'); //Nan- Not a number
stri = true;
stri = Number([1,2,3,3,4,4,56,6]); //Nan
console.log(stri, typeof stri);

// let number = parseInt('34.783');
number = parseFloat('34.789');

//tofixed- specify no. of decimal places after numbers
console.log(number.toFixed(2), typeof number);

//Type coercion
let mystr ='698';
let mynum = 34;  
console.log(mystr + mynum);
//o/p- mynum is converted to string and concatenated to mystr



