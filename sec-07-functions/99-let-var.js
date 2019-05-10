/*****  Issue 1 - var is function scoped *****/
function start() {
  // variable declared with 'var' - it's scope is not limited to the 'block' in which it is defined
  // 'var' is limited to the 'function'.
  for (var i = 0; i < 5; i++) {
    console.log(i);

    if (true) {
      var color = "red"; // this is accessible anywhere in this function
    }
  }
  console.log(i); // will print value 5
  console.log(color); // will print value red
}

start();

/*
    var - function-scoped
    ES6 - let, const => block-scoped
*/

/***** Issue 2 - var declared outside of a function is attached to the 'window' object. *****/
// Both below are global variables but 'let' variable is 'not attached' to the 'window' object.
var color2 = "orange";
let age = 30;

/***** Side Note about functions *****/
// Functions are global and are attached to the window object. Use modules to encapsulate.
function sayHi() {
  console.log("hi");
}
