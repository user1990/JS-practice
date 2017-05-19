'use strict';

// Arrow functions - shorter function syntax
// Why: small, inline, single-purpose

// Example
const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' }
];

// With ES5
/* const totalDamageOnDorkman = dragonEvents
  .filter(function(event) {
    return event.type === 'attack';
  })
  .filter(function(event) {
    return event.target === 'player-dorkman';
  })
  .map(function(event) {
    return event.value;
  })
  .reduce(function(prev, value) {
    return (prev || 0) + value;
  });*/

// Acomplished with arrows
const totalDamageOnDorkman = dragonEvents
  .filter((e) => e.type === 'attack')
  .filter((e) => e.target === 'player-dorkman')
  .map((e) => e.value)
  .reduce((prev, x) => (prev || 0) + x);

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);

// example-2
let person = {
  name: 'Ryan',
  hobbies: ['Robots', 'Computers', 'Internet'],
  showHobbies: function() {

    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};

person.showHobbies();


