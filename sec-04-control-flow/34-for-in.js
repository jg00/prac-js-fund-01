console.log("--for in--");

// for-in
// for-off
// To iterate over properties of an object or elements of an array

const person = {
  p: {
    name: "Mosh",
    age: 30
  },
  d: 8
};

console.log("ex: for in > iterate over properties of an object --");
// Use bracket notation when we don't know ahead of time the name of the property
for (let key in person) {
  console.log(key, person[key], person[key].age);
}

console.log("ex: for in > iterate over properties of inner object --");
// Iterate over properties of inner object
for (let key in person) {
  console.log(key);
  for (let innerObjkey in person[key]) console.log(innerObjkey);
}

console.log(
  "ex: for in > iterate over elements of an array - give you *index* --"
);
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// for of loop - ECMA6 - ideal way to iterate over arrays
