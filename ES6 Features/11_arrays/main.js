// Simple example
let programingLanguages = ['JavaScript', 'PHP', 'Python'];

for (var i = 0; i < programingLanguages.length; i++) {
  console.log(`I really like ${programingLanguages[i]}`);
}

// Example with for...of
let programingLanguages = ['JavaScript', 'PHP', 'Python'];

for (let language of programingLanguages) {
  console.log(`I really like ${language}`);
}

// Array from
function sum() {
  arguments = Array.from(...args);
  return arguments.reduce((prev, cur) => prev + cur)
}

console.log(Array.from('Does this work?'));