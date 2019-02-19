const first = [{ id: 1 }];
const second = [4, 5, 6];

// 1 spread operator (like .concat())
// const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"]; // [ { id: 1 }, 'a', 4, 5, 6, 'b' ]
first[0].id = 20; // [ { id: 20 }, 'a', 4, 5, 6, 'b' ]

// 2 copy all elements of array into a new array
// const slice = combined.slice();
const copy = [...combined]; // [ { id: 20 }, 'a', 4, 5, 6, 'b' ]

console.log(combined);
console.log(copy);
