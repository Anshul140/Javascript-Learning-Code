//Create a heading element with text as "Go to code with Harry" and create an a tag outside it with href = "https://www.codewithharry.com"

console.log("This is quiz tutorial");

let H = document.createElement('h2');
H.innerHTML = '<b>Go to Code with harry</b>';


let elem = document.createElement('a');
elem.innerHTML = '<a href="https://www.codewithharry.com">Click Here to Visit</a>';

let D = document.querySelector('div.Head');
D.appendChild(H);
D.appendChild(elem);

console.log(D);
