'use strict';

// Strings
let theString = 'String is a constructor for strings, or a sequence of characters';

// startsWith()
// endsWith()
// includes()

console.log(theString.startsWith('String'));
console.log(theString.endsWith('characters'));
console.log(theString.includes('constructor'));

// Numbers
// Hex
console.log(0xFF);
// Binary
console.log(0b101011);
// Octal
console.log(0o543);

console.log(Number.isFinite(NaN)); // false
console.log(Number.isNaN('string')); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isInteger(Infinity)); // false
