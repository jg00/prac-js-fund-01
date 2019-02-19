// Combining reference types
// If you have objects the objects are not copied.  The references themselves are copied.
const first = [{ id: 1 }];
const second = [4, 5, 6];

const combined = first.concat(second); // combined > [ { id: 1 }, 4, 5, 6 ]
first[0].id = 10; // combined > [ { id: 10 }, 4, 5, 6 ]

const slice = combined.slice(); // slice > [ { id: 10 }, 4, 5, 6 ]

console.log(combined);
console.log(slice);
