const numbers = [1, 2, 3, 1, 9, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, current) => {
    console.log(accumulator, current);
    if (current > accumulator) return current;
    return accumulator;
  });
}
