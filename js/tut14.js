console.log('Welcome to tut 14 | JS DOM selectors');
/*
Element Selectors
1- Single element selector
2- Multi Element Selector
*/

// 1- Single element selector
// let element = document.getElementById('box');
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'brown';
element.innerText = 'Anshul is a good boy';
element.innerHTML = '<b>Anshul is a good boy</b>';
// console.log(element.innerHTML);


let sel = document.querySelector('#box');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel.style.color = 'green';
console.log(sel);

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems[0]);

// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'purple';
// })

let elem = document.getElementsByTagName('div');

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color = 'orange' ;
}
