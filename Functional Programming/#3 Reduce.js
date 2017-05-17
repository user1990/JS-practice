// Reduce - Multi-tool to list transformations
var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

// Reduce
var totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

// Arrow example
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);



