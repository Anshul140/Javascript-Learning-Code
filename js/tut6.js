console.log('We are at tut6');
const name = 'Anshul';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1> this is h1 heading</h1> \n" +
    "<p>this is a paragraph</p>";

html = html.concat('\nHello', '\nWorld');
// console.log(html);
console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html);

/*
console.log(html.indexOf('/p>'));
console.log(html.lastIndexOf('>'));
console.log(html.charAt(5));
console.log(html.endsWith('WorldFucking'));//returns boolean value
console.log(html.includes('llo'));
console.log(html.substring(0,8)); //0->starting index      8->no. of characters
console.log(html.slice(-5)); //last 5 characters
console.log(html.split(' ')); //creates an array of all words of html before which a space ' ' comes

console.log(html.replace('this', 'it'));
//replaces only 1st occurence
*/

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
<h1> This is h1 heading </h1>
<p> You like ${fruit1} and ${fruit2}
`;

document.body.innerHTML= myHtml;

let v1 = 'Harry Bhai';
let v2 = 'You are Awesome';
let codHtml =`Hello ${v1} 
 I wanna say <h2> ${v2} </h2>`;

document.body.innerHTML= codHtml;

