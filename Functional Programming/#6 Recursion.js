// Recursion is when a function calls itself until it doesn't

let countDownFrom = (num) => {
  if (num === 0) { return; }
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);

// Example 2
let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'labradors', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' }
];

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter((c) => c.parent === parent)
    .foreach((c) => node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
