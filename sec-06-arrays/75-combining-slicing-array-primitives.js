// Combining primitives
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
// const slice = combined.slice(2, 4); // [3,4] ie [startIndex, endIndex]
// const slice = combined.slice(2); // [ 3, 4, 5, 6 ] ie [startIndex, endIndex(excluded)]
const slice = combined.slice(); // [ 1, 2, 3, 4, 5, 6 ] returns all if start/end indexes exlcuded.

console.log(combined);
console.log(slice);
