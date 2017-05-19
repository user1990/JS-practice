'use strict';
// Variables declared by let have as their scope the block in which they are defined
// blocked-scope means everything between  {}

// Example-1
function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

testLet();
/* Output
50
30
*/

// Example-2
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
/* Output
ReferenceError: i is not defined
*/

// Const - the value that cant be changed
const colors = [];

colors.push('red');
colors.push('blue');

colors = 'Green'; // If we make a change we get a TypeError: Assignment to constant variable.

console.log(colors);

