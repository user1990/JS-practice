// Map goes through array and transforms all items into an array of the same length with each individual item

// Task: Get all names of all the animals
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
];


// 5 different methods to do this
// for loop
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}

// map-basic
var names = animals.map(function(animal) { return animal.name; });

// map-new-object
var names = animals.map(function(animal) { return animal.name + ' the ' + animal.species; });

// map-basic-arrow
var names = animals.map((animal) => animal.name);

// map-basic-arrow-x
var names = animals.map((x) => x.name);


