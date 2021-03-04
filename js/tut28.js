console.log('This is tut-28');

//Object Literal Object.prototype
let obj = {
    name: "Anshul",
    channel: "Awesome Web Developer",
    address: "Earth-611C"
}

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = function (){
    return this.name;
}
//here we are modifying object which was created by us only through constructor
//but don't ever try to modify Object.prototype which is parent/global/ or pre-defined object...in our case it is 'obj'


let obj2 = new Obj("Harry");
console.log(obj2);