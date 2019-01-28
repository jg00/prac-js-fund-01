// Strict Equality Operator (Type + Value)
// console.log(1 === 1);   // true
// console.log(1 === "1"); // false

// Lose Equality (if types don't match it does some auto converting)
console.log(1 == 1); // true
console.log("1" == 1); // still true; looks at datatype of value on right and auto converts value on right
console.log(true == 1); // still true; converted to boolean
