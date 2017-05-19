'use strict';
/* Rest parameters */

// Allows to show indefinite number of arguments as an array.
// ES5 examle
let sum = function() {
  return Array.prototype.reduce.call(arguments, (prev, curr) => {
    return prev + curr;
  });
};

console.log(sum(2, 3, 4, 5));

// ES6 examle
let sum2 = function(...args) {
  return args.reduce((prev, curr) => prev + curr);
};

console.log(sum2(2, 3, 4, 5));

// ES6 example-2
let multiply = (mul, ...numbers) => {
  return numbers.map((n) => {
    return mul * n;
  });
};

let results = multiply(2, 7, 4, 5);

console.log(results); // [14, 8, 10]

/* Spread operator */
// Allows an expression to be expanded in places where multiple arguments are expected.
// ES5 example
let numbers = [4, 6, 3, 8];

let max = Math.max.apply(null, numbers);

console.log(max); // 8

// ES6 example
let numbersSpread = [4, 6, 3, 8];

let maxSpread = Math.max(...numbersSpread);

console.log(maxSpread); // 8

// ES6 example-2
// Concat arrays
let nums = [4, 6, 3, 8];
let newNums = [4, 6, 3, 8, ...nums];

console.log(newNums);
