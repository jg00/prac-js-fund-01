// 1 Filter primitives
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

// 1 Build html
const items = filtered.map(n => `<li>${n}</li>`); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
const html = "<ul>" + items.join("") + "</ul>";
console.log(items);
console.log(html);

// 2 Map to an object
const objectItems = filtered.map(n => {
  return { value: n };
});

// same result as above
// if you have a single line of code and returning an object, place in ()
// const objectItems = filtered.map(n => ({ value: n }));

console.log(objectItems); // [ { value: 1 }, { value: 2 }, { value: 3 } ]

// 3 Chaining
const result = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(result);
