console.log('This is tut 20');

//to know typeof value
//typeof.window.localStorage.Name2;

let impArr = ['Rajveer','Shashwat','Sameer'];

//addition of key value pair in localstorage
localStorage.setItem('Name1','Anshul');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('Friends', JSON.stringify(impArr));  //Array is converted into string

//localStorage.clear();
//clears the localstorage

//Clear particular key-value pair
localStorage.removeItem('Name2');

//Retrieve item from local storage
let name = localStorage.getItem('Name1');
name = JSON.parse(localStorage.getItem('Friends'));
console.log(name);

sessionStorage.setItem('sessionName1','Anshul');
sessionStorage.setItem('sessionName2','Rohan');
sessionStorage.setItem('sessionFriends', JSON.stringify(impArr));

