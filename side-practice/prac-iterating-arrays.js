const numbers = [1, 2, 3, 4];

for (let value of numbers) console.log(value);
for (let index in numbers) console.log(index);
numbers.forEach((value, index) => console.log(index, value));
