console.log("Symbols in Javascript");

//Symbols
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');

//console.log("Type of Symbol is:", typeof(sym1));   //symbol

//Before introduction of symbol, Creating Unique keys was difficult with just using primitive datatypes 

console.log(sym1===sym2);  //false

const a = "String1";
const b = "String1";

console.log(a === b);    //true
console.log(undefined === undefined);    //true
console.log(null === null);    //true

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1]= "Harry";
myObj[k2]= "Rohan";
myObj["name"]= "Good Boy";

console.log(myObj);
console.log(myObj[k1]);     //Harry
console.log(myObj[k2]);     //Rohan
console.log(myObj["name"]);  //Good Boy
// console.log(myObj.k2); //cannot do this to get 'Rohan' because it is same as myObj["k2"]

for(let key in myObj){
    console.log(key, myObj[key]);  //name Good Boy
}
//Symbols are ignored in for in loops hence o/p is just name Good Boy
