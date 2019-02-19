const numbers = [1, 2, 3];

// .join() > array method
const joined = numbers.join(","); // returns a string
console.log(joined); // 1,2,3

// .split() > string method
const message = "This is my first message";
const parts = message.split(" "); // returns array of elements
console.log(parts); // [ 'This', 'is', 'my', 'first', 'message' ]

// combine again using .join()
const combined = parts.join("-");
console.log(combined); // This-is-my-first-message
