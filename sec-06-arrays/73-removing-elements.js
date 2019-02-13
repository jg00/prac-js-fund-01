const numbers = [1, 2, 3, 4, 5];

let first = numbers.shift(); // removes first
console.log(first); // 1 > lets you capture the element
console.log(numbers); // [ 2, 3, 4, 5 ]

numbers.pop(); // removes last
console.log(numbers); // [ 2, 3, 4 ]

numbers.splice(1, 2); // removes from specified start and number of elements
console.log(numbers); // [ 2 ]
