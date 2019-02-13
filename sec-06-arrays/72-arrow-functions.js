const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "c" },
  { id: 2, name: "b" }
];

// function()
const course = courses.find(function(course) {
  return course.name === "b";
});

console.log(course);

// arrow function
const course2 = courses.find(course => course.name === "b");

console.log(course2);

/*
    Note: Whenever you want to pass a function as a callback function
    or as an argument to a different method you can use the arrow function
    syntax.
*/
