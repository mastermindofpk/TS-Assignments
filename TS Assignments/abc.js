"use strict";
//Program that Creates a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var z = [1, 2, 3, 4, 6];
var insertValueAtIndex = (array, index, value) => {
    array.splice(index, 0, value);
    return array;
};
let modifiedResult = insertValueAtIndex(z, 4, 5);
console.log(modifiedResult);
