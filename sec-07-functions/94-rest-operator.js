// Using 'rest operator' (instead of 'arguments' object) if there are varying number of argumnets.  ...args returns []
// ...prices ie the rest of the argumens need to the the last argument.
function sum(discount, ...prices) {
  const total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
