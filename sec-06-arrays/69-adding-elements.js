// Note that const keyword does not stop us from modifying the contents of an array
// Arrays are objects
// Arrays are zero indexed
const numbers = [3, 4];

numbers.push(7, 8); // end
numbers.unshift(1, 2); // beginning
numbers.splice(4, 0, 5, 6); // middle > .splice(start, delete, items to add)

console.log(numbers);
