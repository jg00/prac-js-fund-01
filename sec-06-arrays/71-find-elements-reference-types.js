const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "c" },
  { id: 2, name: "b" }
];

// .inclues() will not work here
console.log(courses.includes({ id: 1, name: "a" })); // false > remember the object passed to .include() is a different object from the object in the array course.

// One way is to loop through array of objects
for (let course of courses) {
  //   console.log(course);
  if (course.id === 2) console.log(course);
}

// .find(predicate) returns the value of the first element in the array that satisfies
// the providing testing function else undefined.
let found = courses.find(course => {
  return course.id === 2;
});
console.log("First found?", found); // First found? { id: 2, name: 'c' } or undefined if not found

// .findIndex(predicate)
let courseIndex = courses.findIndex(course => {
  return course.id === 2;
});
console.log("First found?", courseIndex); // First found? 1 or -1 if not found
