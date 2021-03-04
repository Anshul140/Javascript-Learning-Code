console.log('tutorial 21 exercise-2');
/*
You have to create a div and inject it into the page which contains a heading.

Whenever someone clicks on the div, it should be converted into an editable item, whenever user clicks away(event - blur), save the note into the localstorage
*/

//Create a new element
let divElem = document.createElement('div');

//Add text to that created element
let text = document.createTextNode('This is my element. Click to edit it.');
divElem.appendChild(text);

//Give element, id, class
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid black; width: 154px; margin:34px; padding:23px; ');

//Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

//Add event listener to the divElem
divElem.addEventListener('click', function(){
    let html = divElem.innerHTML;
    divElem.innerHTML = `<textarea class="form-control textArea" id="textArea" rows="3"> ${html}</textarea>` ;
})


