console.log("Sets in Javascript");

//Set stores unique values
const mySet = new Set();
console.log('The set looks like this:', mySet);

//Adding Values to this set
mySet.add('this');
mySet.add('My Name');
mySet.add('My Name');  //won't be added in set because 'My Name' is already present in set
mySet.add('My Age');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('this2');
console.log('The set looks like this now:', mySet);

//Use constructor to initialize the set
// let mySet1 = new Set([1,45,'this', 'this', {a:4, b:7}, false]);

console.log(mySet.size);

console.log(mySet.has(346));

console.log("Before Removal of element this2:",mySet.has('this2'));
mySet.delete('this2');
console.log("After Removal of element this2:",mySet.has('this2'));

// Iterating a set
for(let item of mySet){
    console.log('Item is:', item);
}
