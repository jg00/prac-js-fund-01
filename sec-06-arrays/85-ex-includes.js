// Write function to search element in an array (instead of .includes() method
const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }

  return false;
}

/*
// Using .indexOf method
function includes(array, searchElement) {
  return array.indexOf(searchElement) !== -1 ? true : false;
}
*/
