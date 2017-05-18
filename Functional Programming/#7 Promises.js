// Promises are, just like callbacks, a way of dealing with things being asynchronous - when we don't know for certain in what order things will happen
// Promises are more powerful than callbacks because they compose - you can combine promises and chain them

// Example 1
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

  // cleaning the room
  let isClean = false;

  if (isClean) {
    resolve('clean');
  } else {
    reject('not Clean');
  }

});

promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('the room is ' + fromReject);
});

// Example 2

let cleanTheRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the Room, ');
  });
};

let removedTheGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'removed the garbage, ');
  });
};

let getIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'got icecream.');
  });
};

cleanTheRoom()
  .then(removedTheGarbage)
  .then(getIcecream)
  .then(function(message) {
    console.log('This is the message\n' + message);
  });

// Return if all are finished
/* Promise.all([removedTheGarbage(), cleanTheRoom(), getIcecream()]).then(function(done) {
  console.log('Everythings done..' + done);
});*/

// Return if one of the is finished
/* Promise.race([cleanTheRoom(), removedTheGarbage(), getIcecream()]).then(function() {
  console.log('one of them is finised!');
});*/

