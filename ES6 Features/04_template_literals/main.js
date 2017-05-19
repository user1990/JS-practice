'use strict';
// Can use multi-line strings, functions
// Instead -'- use -`-
// Easier to to concatination

let human = 'John';
function makeUppercase(word) {
  return word.toUppercase();
}

let template = `<h1>${makeUppercase('Hello')}, ${human}</h1>
                <p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;

// Example-2
let person = {
  firstName: 'Ryan',
  lastName: 'Christiani',
  sayName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
};

let name = person.sayName();
console.log(name);


