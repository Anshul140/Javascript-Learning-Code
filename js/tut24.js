console.log("Welcome to tut-24 DATE & TIME");

let today = new Date();
// console.log(typeof today);  //object
let otherDate = new Date('8-4-2003 04:54:08');   //mm/dd/yyyy
// otherDate = new Date('June 14 1979');
// otherDate = new Date('14/06/1979');  //invalid date format dd/mm/yyyy
// otherDate = new Date('06/14/1979');  //valid date format mm/dd/yyyy
console.log(otherDate);
let a;
a = otherDate.getDay();  //1- O/P because day of 4th August 2003 is monday
//sunday-0  monday-1 tues-2 weds-3 thurs-4.....

a = otherDate.getDate(); //4- O/P
a = otherDate.getMinutes(); //54- O/P
a = otherDate.getSeconds(); //08-O/P
a = otherDate.getTime();  //gives no. of seconds from the beginning of the year
a = otherDate.getMonth();  //7- O/P
//jan-0 feb-1 mar-2.......aug-7

console.log(a);  
otherDate.setDate(23);  //date is changed from 4 to 23
otherDate.setMonth(11); //month is changed to december because 11-december and 0-january
//if we enter do setMonth(12) then it will set the month to january
otherDate.setFullYear(2012);
console.log(otherDate);  



