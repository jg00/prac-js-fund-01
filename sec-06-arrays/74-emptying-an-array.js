let numbers = [1, 2, 3, 4];
let another = numbers;

// If you have a single reference you could set to empty array
// numbers = [];

// If you have multiple references to an array you can truncate the array
numbers.length = 0;
console.log(numbers, another); // [] []

// Another way to truncate the array
// numbers.splice(0, numbers.length);
