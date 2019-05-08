const numbers = [1, 2, 3, 4, 1, 1, -3, -1, 5];

const output = exclude(numbers, [1, 5, 4]);
console.log(output);

function exclude(array, excluded) {
  const result = [];
  for (let element of array) {
    if (excluded.indexOf(element) === -1) {
      result.push(element);
    }
  }
  return result;
}
