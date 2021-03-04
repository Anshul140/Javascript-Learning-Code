console.log("Tut-41 || Arrow functions");

//Creating Regular function
// const harry = function (){
//     console.log("This is the best person ever");
// }
// harry();

//convert the above function to arrow function
// const harry = ()=>{
//     console.log("This is the best person ever");
// }
// harry();

//function returning something
// const greet = function(){
//     return "Good Morning";
// }

//One liners don't require braces/return. It will automatically return
// const greet = ()=> "Good Morning";

//One liners returning object literals
// const greet = () => ({Roll: "2019UGMM051"});
// console.log(greet());

//One liners with one arguement(string)- here arguement doesnt need parenthesis
// const greet = Name => "Good Evening "+ Name;


//One liners with two arguements(string, string)- here arguement needs parenthesis- (Name, Ques)
const greet = (Name, Ques) => "Good Evening "+ Name + ". " + Ques;
console.log(greet("Anshul", "How are you?"));