console.log("Tut-46 || Regular Expression");
let reg = /harry/g;  //This is a regular expression literal in js
// reg = /harry/g; //g-means global(used when multiple expression of same name are present)
// reg = /harry/i; //i-means case insenstive - will return index of only 1st 'harry'

console.log(reg);
// console.log(reg.source);  //things written inside regular expression

let s = "This is great code with harry and also harry bhai";
//Function to match expressions
//1- exec()- will return an array for match or null for no match
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s); -->We can use multiple exec with global flag-g

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

//2-test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2);  //-->This will only print true if the "reg" is there in the string "a"

//3-match() - It will return an array of results or null
// let result3 = reg.match(a); -->This is false syntax
let result3 = s.match(reg);   //->This is correct statement
// console.log(result3);

// 4-search() - Returns index of first match else -1
// let result4 = reg.search(s); //This is wrong statement
let result4 = s.search(reg);
// console.log(result4);

// 5- replace() - returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = s.replace(reg, "SHUBHAM");
console.log(result5);

