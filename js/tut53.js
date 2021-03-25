console.log("Generators tutorials");
//Generators in Javascript

function* numbersGen(){
    let i =0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
       yield i++;
    }
}  //returns object

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());