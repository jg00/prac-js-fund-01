const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers, 5);

console.log(count);

function countOccurrences(array, searchElement) {
  const result = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  return result;
}
