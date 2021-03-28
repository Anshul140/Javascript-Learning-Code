console.log("Maps in Javascript tutorials");
//Maps in javascript: We can use any type of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};

//Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank object');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

//Getting values from map
let value1 = myMap.get(key1);
console.log(value1);    //O/P--- This is a string

//Getting Size of Map
console.log(myMap.size);  //3

//We can use loop using for..of to get keys and values
for(let [key, value] of myMap){
    console.log(key, value);
}

//Getting only keys
// for(let key of myMap.keys()){
//     console.log("Key:",key);
// }

//Getting only values
// for(let key of myMap.values()){
//     console.log("Values:",key);
// }

//You can loop through a map using fo each loop
myMap.forEach((value, key)=>{
    console.log("Key: ", key);
    console.log("Value: ", value);

})

//Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

//Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to key array is ', myKeysArray);

//Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to value array is ', myValuesArray);