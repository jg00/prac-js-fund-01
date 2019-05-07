// Hoisting - Process of moving function declarations to the top of the file.

// Function Delaration
// Ability to call function declaration before defined.
walk();

function walk() {
  console.log("walk");
}

// Function Expression.
let run = function() {
  console.log("run");
};

// In JS functions are objects.  In this case below both move and run are references to the same object in memory.
let move = run;
run();
move();
