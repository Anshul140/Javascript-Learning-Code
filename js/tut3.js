//Variables in JS
// var, let, const
var name= 'Anshul';
var channel;
var marks = 34;
console.log(name, channel, marks);

//Rules for creating Javascript Variables
// 1-Cannot start with numbers 
// 2-Can start with letters 
// 3-Are case senstive 

var city ='Jamshedpur';

const oName = 'Raja Ram';
// oName= 'Anand'; this is error... cannot assign different value to const variables
console.log(oName);

{
    // let city = ' kanpur';  `let` keyword helps in creating local variables
    city = 'Rourkela';
    console.log(city);
}
console.log(city);

//Const and array
const arr1 =[10,20,30,40,50];
arr1.push(60);
//  arr1 = [10,40,30,50]; 
// Invalid statement: arr1 cant be reassigned
console.log(arr1);


