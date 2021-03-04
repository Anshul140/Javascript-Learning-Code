console.log('Welcome to tutorial 12.js');
let a = document;  //document is of 'object' datatype in JS

a = document.all;
// a = document.body;
// a = document.forms;

Array.from(a).forEach(function(elememt)
{
    console.log(elememt);
}
);
a = document.links[0].href;
console.log(a);

//Assignment
/*
use document.images and document.script and print the list of images and scripts on html page
*/
