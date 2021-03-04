console.log("Tutorial-44 || Error Handling & Try Catch");

//Pretend this is coming from server
let a = "Harry bhai";
a = undefined;
if(a != undefined){
    throw new Error("This is not undefined");
}
else{
    console.log('This is undefined');
}

try{
//    gasjoafioefh
   console.log("We are inside try block");
   funcHarry();

}catch(error){
    console.log("Are you okay?");
    console.log(error.name);   //ReferenceError
    console.log(error.message);

}finally{
    console.log("Finally we will run this");
    
}