'use strict';

// Destructuring - Way to extract data from array and pick values
// Example-1
let person = {
  name: 'Ryan',
  age: 30,
  location: 'Toronto'
};

let { age, location: currentLocation } = person;

console.log(age, currentLocation); // 30, Toronto

// Example-2
let numbers = [1, 2, 3, 4];

let [first, second,, fourth] = numbers;

console.log(first, second, fourth); // 1 2 4

