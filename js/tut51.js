console.log("Iterators Tutorials");

function fruitsIterator(values) {
    let nextIndex = 0;
    //We will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                //We will below object with only key done
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];

console.log("My Array is:", myArray);

//Using the iterator

const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);   
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);


