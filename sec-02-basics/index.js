/*
Summary:
1 let vs const
2 primitive types
    string, number, boolean, undefined, null

3 Dynamic typing in javascript

4 reference types
    object {}, arrays [], functions



*/

// 1 let
let name = "Mosh";
console.log("name: ", name);

// 2 const
const interestRate = 0.3;
// interestRate = 1;
console.log("interestRate: ", interestRate);

// 3 Primitive types (value types)
/*
number
string
boolean
undefined
null
symbol

let name = 'Mosh' // string literal
let age = 30 // number literal
let isApproved = false;  boolean literal
let firstName; undefined by default
let selectedColor = null; Use in situations where we want to explicitly clear the value of a variable
*/

// 4 Dynamic Typing - type of a variable can change at runtime
let age = 30; // if 30.1 it is still of type number.  No floating points in javascript.
let isApproved = false;
let firstName = undefined;

let selectedColor = null; // typeof selectedColor "object"
console.log(typeof selectedColor);

// 5 Reference types
/*
Object {}  // object literal; key(properties of object)=value
Array []
Function fx
*/

let person = { name: "Mosh", age: 30 };
console.log("person: ", person);
console.log("person.age: ", person.age);

// 5a Dot Notation
person.name = "John";

console.log("person name changed: ", person.name);

// 5b Bracket Notation
console.log("bracket notation: ", person["name"]); // You need to pass a 'string' else it will be undefined

// 5c Use case for bracket notation
let selection = "name";
console.log("bracket notation at runtime: ", person[selection]);

// 6a Arrays (Dynamic in Javascript - size of array, datatypes can change dynamically)
// Technically an array in Javascript is an object

let selectedColors = ["red", "blue"];
selectedColors[2] = "green"; // notice that the length is dynamic
selectedColors[3] = 1; // notice that the length is dynamic
selectedColors[4] = { name: "smith" }; // notice that the length is dynamic

for (let i in selectedColors) {
  console.log(selectedColors[i]);
}

console.log("typeof arrays: ", typeof selectedColors);

// 6b You can use . Notation
console.log("array length: ", selectedColors.length);

// 7 Functions
greet(name); // bubbling

// Performing a task
function greet(name, middleName) {
  console.log("hello world 2 - " + name + " middleName: " + middleName);
}

// if you don't pass middleName argument the default value of middleName is undefined

// 8 Types of functions
// Above function is performing a task
// Other functions may calculate a value and return

function square(number) {
  return number * number;
}

let number = square(2);
console.log("result of number: " + number);
