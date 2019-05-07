// Two arguments
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1 + undefined = NaN
console.log(sum()); // NaN
console.log(sum(1, 2, 3, 4, 5)); // only first two are used

// Every function has an "arguments" object (for varying number of parameters)
// argumens object is not an array but this is iterable
function sum2() {
  console.log(arguments);

  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum2(1, 2, 3, 4, 5, 10));
