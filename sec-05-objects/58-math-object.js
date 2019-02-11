// 1 Math.random() example
let random = Math.random(); // between 0 and 1
console.log(random);

// MDN example >= min and < max
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(2, 5));

// 2 Math.round(1.9).  MDN examples.
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6

// 3 Math.max(), Math.min()
console.log(Math.max(3, 2, 10, 8)); // 10
console.log(Math.min(3, 2, 10, 8)); // 2
