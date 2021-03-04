console.log("This is tutorial 7");

const marks = [23,34,45,24,68];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 68, [45,56]];

const arr = new Array(24,156,56, 'Orange');
console.log(arr);
// console.log(mixed[2]);

// console.log(arr.length);
// console.log(Array.isArray(mixed));
// console.log(Array.isArray('giudgqdbkjwdg'));

arr[0] = 'Anshul';
// console.log(arr);

let arrelement = arr[0];
console.log(arrelement);

let value = marks.indexOf(45);
// let value = marks.indexOf(48);
console.log(value);

//Mutating or modifying arrays

marks.push(72);
//push- adds new element at the end of array

marks.unshift(98);
//unshift- adds new element at the 0th index of array

marks.pop();
//pop- deletes an element from end of array

marks.shift();
//shift- removes the element from 0th index of array

marks.splice(1,2);
//1st parameter- starting index | 2nd parameter- no. of elements to be deleted

marks.reverse();
//reverse- reverses the whole array

console.log(marks);

let marks2 = [1,3,6,90];
// marks = marks.concat(marks2); 
//above statement is an error. Assignment cant be done to const variables

let marks1 = [20,40,60,100];
marks1 = marks1.concat(marks2);
console.log(marks1);

let myObj = {
    Name: 'Anshul',
    Branch: 'Metallurgy',
    Scores: [78,79,75,89,91],
    isActive: true
}

console.log(myObj);
//for accessing objects of myObj

console.log(myObj.Name);
console.log(myObj['Branch']);



