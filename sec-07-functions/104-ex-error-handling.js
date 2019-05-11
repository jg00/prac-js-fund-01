try {
  const numbers = true;
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("This is not an array!");

  return array.reduce((accumulator, current) => {
    // console.log(accumulator, current, searchElement);
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
