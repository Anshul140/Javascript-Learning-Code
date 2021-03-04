console.log('This is tut-27 || Object Oriented Programming');

//Object Literals for creating objects
let car ={
    name: 'Maruti 800',
    topSpeed: 89,
    run: function(){
        console.log("Car is running");
    }
}
console.log(car);
/*
console.log(car.run);   
     o/p-  
ƒ (){
    console.log("Car is running");
}

console.log(car.run()); // O/P-Car is running 
*/

//We have already seen constructors like these
// new Date();

//Creating constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`${this.name} is slower than Mercedes by ${200-this.topSpeed}km/h`);
    }
}

car1 = new GeneralCar('Renault', 185);
car2 = new GeneralCar('Maruti', 85);
car2 = new GeneralCar('Mercedes', 200);
console.log(car1.analyze());
console.log(car2.analyze());
