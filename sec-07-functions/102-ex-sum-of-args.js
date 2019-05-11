const numbers = [1, 2, 3, 4];

console.log(sum(1, 2, numbers, 5, 2));

function sum(...args) {
  const arguments = [];
  args.forEach(arg => {
    Array.isArray(arg) ? arguments.push(...arg) : arguments.push(arg);
  });

  return arguments.reduce((accumulator, current) => accumulator + current);
}
