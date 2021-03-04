console.log("This is tut-18 More on Events");
/*
document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    // console.log("Thanks", e);
    e.preventDefault();
}
function func2(e){
    console.log("Thanks...It's a double click", e);
    e.preventDefault();
}
function func3(e){
    // console.log("Thanks...It's a mouse down", e);
    e.preventDefault();
}
*/
document.querySelector('.no').addEventListener('mouseenter',function(){

    console.log('You entered no');
})
document.querySelector('.no').addEventListener('mouseleave',function(){

    console.log('You exited no');
})

// document.querySelector('.no').addEventListener('mousemove',function(){

//     console.log('You trigerred mouse move event');
// })