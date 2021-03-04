console.log('Welcome to tut-16');
let element = document.createElement('li');
let text = document.createTextNode('This text is inserted by JS');
element.appendChild(text);

//Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
// element.innerText = 'This text is inserted by JS';
// element.innerHTML = '<b>This text is inserted by JS</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

//For replacing element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

let pr = elem2.hasAttribute('id');
elem2.removeAttribute('id');
elem2.setAttribute('id','NewID');
console.log(elem2);
console.log("If ID of elem2:",pr);