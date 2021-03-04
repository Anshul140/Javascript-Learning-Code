console.log('This is tutorial 47');

let regex = /harry/;
//Let's look into some metacharacter symbols
regex = /^harr/; //^-carret symbol-means expression will match if string starts with
regex = /ry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //'.'-->dot means matches any one character
regex = /h*rry/; //'.'-->dot means matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means character is optional(it can be present or absent but no other character is allowed in that place)
regex = /h\*rry/i;

let str = "H*rry is codeWith";

let result = regex.exec(str);
console.log("The result from exec is:", result);

if(regex.test(str))
{
       console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
       console.log(`The string ${str} does not match the expression ${regex.source}`);
}