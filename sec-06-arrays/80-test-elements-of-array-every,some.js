const numbers = [1, -1, 2, 3];

// 1 .every() - returns bool
const allPositive = numbers.every(number => number >= 0);
console.log(allPositive);

// 2 .some() - returns bool. At least one matches the criteria
const atLeastOnePositive = numbers.some(number => number >= 0);
console.log(atLeastOnePositive);
