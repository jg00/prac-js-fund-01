// Template literal with expression
const name = "Ben";
const message = `Hi ${name},

Welcome to template literals!

${addNumbers()}`;

console.log(message);

function addNumbers() {
  return 1 + 3;
}
