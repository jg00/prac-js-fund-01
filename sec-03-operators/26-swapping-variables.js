let a = "red";
let b = "blue";

console.log(a);
console.log(b);

function swap(first, second) {
  let temp = first;
  a = second;
  b = temp;
}

swap(a, b);

console.log(a);
console.log(b);
