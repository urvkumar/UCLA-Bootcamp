/* eslint-disable prettier/prettier */
// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

const commonElement = function(arrA, arrB) {
    const numbers = {};
    for(const num of arrA) { numbers[num] = num; }
    for(const num of arrB) { if(numbers.hasOwnProperty(num)) { return num; } }
};
