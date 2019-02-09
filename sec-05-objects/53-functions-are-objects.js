// 1 Functions in Javascript are Objects.
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(2);

// 2 For example Circle function has properties and methods
console.log(Circle.name); // 'Circle'
console.log(Circle.length); // 1 ie number of arguments

console.log(Circle.constructor); // ƒ Function() { [native code] }

// 3 Above Circle(radius) function can be created like below
let Circle1 = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function() {
      console.log("draw");
    };
    `
);

const circle = new Circle1(2);

// Shows Circle objects with the two members
console.log(circle);
console.log(another);

// 4 Other methods available in our functions

// 4a .call({}, args)
// The first argument in .call({},2) specifies the target of 'this' keyword'.
// Below expression is exactly like "new Circle(2)" expression
Circle.call({}, 2);

// 4b Other methods available in our functions - .apply({}, [array of args])
Circle.apply({}, [2, 3, 4]);

// 5 Example .call()
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function printFullName() {
  return this.lastName + " " + this.firstName;
}

let alex = new Person("Alex", "Boone");
let sam = new Person("Sam", "Wells");

console.log(printFullName.call(sam));
console.log(printFullName.call(alex));
