console.log("This is tut-17 on events");

document.getElementById('heading').addEventListener('click',function(e){
    console.log('You have clicked the heading');
    var V = e.target.className;
    V = Array.from(e.target.classList);
    V = e.offsetX;
    V = e.offsetY;
    V = e.clientX;
    console.log(V);
});
// document.getElementById('heading').addEventListener('mouseover',function(e){
//     console.log('You have clicked the heading');
//     var V = e.target.className;
//     V = Array.from(e.target.classList);
//     V = e.offsetX;
//     V = e.offsetY;
//     V = e.clientX;
//     console.log(V);
// });