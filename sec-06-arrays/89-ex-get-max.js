const numbers = [1, 8, 9, 15, 1, 9, 5, 1];

const max = getMax(numbers);

console.log(max);

// Version 1
// function getMax(array) {
//   let a = array[0];

//   for (i = 1; i <= array.length; i++) {
//     if (array[i] > a) {
//       a = array[i];
//     }
//   }
//   return a;
// }

// Version 2
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((initialValue, currentValue) => {
    if (currentValue > initialValue) {
      initialValue = currentValue;
    }
    return initialValue;
  });
}
