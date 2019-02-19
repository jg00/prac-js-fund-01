const numbers = [4, 5, 6];

// for of
for (let number of numbers) console.log(number);

// forEach(number, index(optional))
numbers.forEach((number, index) => console.log(index, number));
