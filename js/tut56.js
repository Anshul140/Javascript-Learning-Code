console.log("for in VS for of Loops");  //connected to index.html outside all folders

people = ["Harry", "Rohan", "SkillF", "Shubham"];

//1- Traditional for loop
// for (let index = 0; index <people.length; index++) {
//     const element =people[index];
//     console.log(element);
// }


obj = {
    name: "Harry",
    language: "Javascript",
    hobbies: "Android App Development"
}
// console.log(obj);
//Iterating an object using traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

//Iterating an object using for-in loop
// for(let key in obj){
//     console.log(obj[key]);
// }

// Iterating a string using for-in loop for aceessing all characters
// myString = "This is my string";

//traditional for loop for iterating string
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element);
// }

// for (const key in myString) {
//     console.log(myString[key]);
// }

//************For-of LOOPS********** //

people = ["Harry", "Rohan", "SkillF", "Shubham"];

console.log("For of Loops");
for(let name of people){
    console.log(name);
}