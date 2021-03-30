console.log("Destructuring in Javascript")

let a,b;
[a, b] = [34, 450];
//console.log(a, b);   //34 450

//Array destructuring
[a, b, c, ...d] = [1, 2, 3, 5, 6, 7, 10, 11, 15];
//console.log(a, b, c, d);   //1  2  3  [5, 6, 7, 10, 11, 15]

({a, b, c, ...d} = {a: 34, b:345, c:67, d:45, e:34})
//console.log(a, b, c, d);  //34  345  67  {d:45, e:34}

const fruits = ['Apple', 'Banana', 'Mangoes'];
[a, b, c] = fruits;
//console.log(a, b, c); //Apple Banana Mangoes

//Object destructuring
laptop = {
    model: "HP Pavilion",
    age: "23 Days",
    gender: "Male",
    net: 1233,
    start: function(){console.log("Started..."); }
}

const {model, age, gender} = laptop;
console.log(model, age, gender);  //HP Pavilion 23 Days Male


//const {model, age, gender2} = laptop;
//console.log(model, age, gender2);  //HP Pavilion 23 Days undefined
