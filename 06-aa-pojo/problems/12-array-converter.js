/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
    let arrayObject = {};
    if (array.length == 1) {
        arrayObject[array[0]] = 1;
    }

    if (array.length === 2) {
        if (array[0] === array[1]) {
            arrayObject[array[0]] = 2;
        } else {
            arrayObject[array[0]] = 1;
            arrayObject[array[1]] = 1;
        }
    }
    
    if (array.length > 2) {
        let counter = 1;
        for (i = 0; i < array.length; i++) {
            for (j = 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    counter++;
                }
            }
            arrayObject[array[i]] = counter;
            counter = 0;
        }
    }
    return arrayObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;