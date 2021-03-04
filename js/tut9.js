console.log('Loops in javascript tutorial');

/*
General Loops:
for, while, do- while
*/
// for(let i=1; i<=40; i++)
// {
//     console.log(i);
// }
let str = 'javascriptloops';
console.log(str.length);


// break- to break or come out of a loop
// continue- to skip an iteration

// let k = 0;
// do{
    //  if(k === 5)
    //  {
    //      break;
    //  }
//      if(k === 5)
//      {
//         k+=1;
//         continue;
//      }
//      console.log(k+1);
//      k +=1;
// } while(k<10);

// console.log("After break statement This line will be printed");

// let arr =[2,4,5,6,7,9];
// arr.forEach(function(element){
//     console.log(element);
// });

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

let obj = {
    name: "Anshul Mahato",   
    age: 20,
    type: 'Dangerous Programmer',
    os: 'Ubuntu'
}
//for accessing objects
//name, age, type, os - keys
//Anshul Mahato,20,DP,Ubuntu - objects

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}