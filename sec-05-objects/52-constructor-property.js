/*
    Main: Every object in Javascript has a property called constructor and that
    references the function that is used to contruct or create that object
*/

// 1 Object created using object literal syntax
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);
console.log(circle.constructor);
/*
    ƒ Object() { [native code] }
*/

// 2 Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log(another.constructor);
/*
    ƒ Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
    }
*/

// 3 Object created using object literal syntax
let x = {};
// let x = new Object()
console.log(x.constructor);
/*
    ƒ Object() { [native code] }
*/

// 4 Other Javascript built in constructor functions
let someString = new String(); // '', "", ``
console.log(someString.constructor);
/*
    String() { [native code] }
*/

// 5 Other
new Boolean(); // true, false
new Number(); // 1,2,3,.

// 5 Other Examples
let booleanValue = true;
let someNumber = 2;

console.log(booleanValue.constructor); // ƒ Boolean() { [native code] }
console.log(someNumber.constructor); // ƒ Number() { [native code] }
