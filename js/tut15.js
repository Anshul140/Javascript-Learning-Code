console.log("Welcome to tut-15");

let cont = document.querySelector('.no'); 
cont = document.querySelector('.container');
// console.log(cont.childNodes);
//first class named 'no' will be selected...here spaces, new line,comments, div, h1, etc eveything is selected including unnecessary elements

// console.log(cont.children); 
//here only important(visible) nodes are selected like h1,div etc

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType;

// console.log(nodeName);
// console.log(nodeType);
/*
NODE-Types
1. elements
2. Attributes
3. Text Node
8. Comment
9. document
10. docType
*/

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild); 
    //for first childNode element
// console.log(container.firstElementChild);
    //for first children element
   
// console.log(container.childElementCount); 
  //count of child elements
// console.log(container.children);  

console.log(container.firstElementChild.parentNode); 
console.log(container.firstElementChild.nextElementSibling); 





