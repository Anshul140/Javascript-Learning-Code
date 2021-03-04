console.log("Welcome to tut-30 || Prototype inheritance ")

const proto = {
    slogan: function(){
        return 'This company is the best' ;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

//This creates Harry object
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Software Developer-II";
// harry.changeName("Anshul");
console.log(harry);

//This also creates Harry object
const harry1 = Object.create(proto, {
    name: {value: "Harry", writable: true},
    role: {value: "Software Developer-II"}
});
harry1.changeName("Anshul"); //will ot work if writable value is not mentioned in prototype
console.log(harry1);

//Employee Constructor
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function(){
    return `This campany is the best. Regards, ${this.name}`;
}

let harryObj = new Employee("Animesh", 345690, 5);
console.log(harryObj);

//Programmer --- with the help of Employee
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Rohan = new Programmer("Rohan", 50000, 3, "C++");
console.log(Rohan);



/*
Quiz-
create an object floor
Using floor create an object cake
*/