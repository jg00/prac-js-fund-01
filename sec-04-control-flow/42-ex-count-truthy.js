// Identify and count truthy elements of an array
const array = [1, null, undefined, 3, 4, "", "a", 0, NaN, true, false];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}
