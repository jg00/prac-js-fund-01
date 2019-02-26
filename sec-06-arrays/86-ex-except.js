// Exclude array of numbers from original array
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [5, 1, 3, 4]);

console.log(output);

function except(array, excluded) {
  const newArray = [];

  for (let element of array) {
    if (excluded.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  return newArray;
}
