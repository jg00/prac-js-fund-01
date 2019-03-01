// Find elements of primitive types
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf("-1")); // -1
console.log(numbers.indexOf(1)); // 0
console.log(numbers.lastIndexOf(1)); //3

// Does a given element exist in an array?
console.log(numbers.indexOf(1) !== -1); // true
console.log(numbers.includes(3)); // true

// All these methods have a second argument where you can specify 'fromIndex' to search from
console.log(numbers.indexOf(1, 2)); // 3 > skips the first value 1

// Search array of objects with title property of type string.
const movies = [
  { title: "Spiderman" },
  { title: "Cat" },
  { title: "DogSpider" },
  { title: "some Spider joke" },
  { title: "lower spider joke" }
];

const results = movies.filter(movie => {
  return movie.title.includes("Spider");
});

console.log(results);
