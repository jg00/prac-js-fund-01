// Return array from range
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const newArray = [];
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}
