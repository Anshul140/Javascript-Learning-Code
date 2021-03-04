console.log('Welcome to tut34 || Asynchronous Programming in JS');

setTimeout(() => {
    for(let index = 0; index<4000; index++){
        console.log('This is index no:',index);
    }
},100);    //Asynchronous func.


console.log('Printing Done...');  