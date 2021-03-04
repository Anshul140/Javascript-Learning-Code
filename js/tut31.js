console.log("Welcome to tut-31 || ES6-Classes");

class Employee {
    //Constructor is a function which is called when a object of a class is created
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }  
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020-this.experience;
    }
    
    //Static methods/functions can be used even without creating Objects || this feature is not available for other functions || Properties of classes can't be used in static functions
    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenLanguage){
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
    }
    
    favouriteLanguage(){
        if (this.language == "python"){
            return "Python";
        }     
        else{
            return 'Javascript';
        }  
    }
    static Multiply(a, b){
        return a *b;
    }
}    

//console.log(Employee.add(20, 30));
// let harry = new Employee("Harry", 56, "Division");
// console.log(harry);

rohan = new Programmer('Rohan', 5, 'Sales', 'Java');
console.log(rohan);
console.log(Programmer.Multiply(12, 5));