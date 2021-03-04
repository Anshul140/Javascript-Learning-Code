console.log("Tut-43 || async/await");

async function harry(){
    console.log("Inside Harry Function");
    const response = await fetch('https://api.github.com/users');
    console.log("Before Response")
    const users = await response.json();
    console.log("Users Resolved");
    return users;
    
    // return "Harry";
}

console.log("Before Calling Harry");
let a = harry();
console.log("After calling Harry");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of js file");



/*  Output-

    Tut-43 || async/await
    Before Calling Harry
    Inside Harry Function
    After calling Harry
    Promise {<pending>}
    Last line of js file
    Before Response
    Users Resolved
    (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/

/*
    Explaination-

    async() returns promise
    await() is used to make asynchronous calls
    
    Sequence:
    1-"Before Calling Harry"
    2-harry()- is called-
      2.1-"Inside harry function"
      2.2-await()- makes asynchronous call, hence execution-pointer(EP) goes to the line below where harry() was called[await() is running in background]
    3-"After Calling Harry"  
    4-"Promise {<pending>}" - because harry() returns promise which is yet to be resolved(hence in a pending state)
    5-"Last line of js file" -because a.then()- is also in pending state- (hence nothing is printed)
    6-Now EP again returns to 1st await()- when fetching is finished it moves to next line
      6.1-"Before Response"
      6.2-again EP meets an await()- but here it waits till it is finished, because rest parts of js file are already executed
      6.3-"Users Resolved"
      6.4-users is returned from harry(), now promise is fullfiled
    7-a.then()- is executed and data fetched from API is printed


*/