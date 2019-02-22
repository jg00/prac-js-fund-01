const numbers = [1, -1, 2, 3];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Specified initial value of accumulator

let sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // Initial value of accumulator not specified so accumulator will be set to the first element.

console.log(sum);
console.log(sum2);
