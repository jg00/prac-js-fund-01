/*
falsy (not a boolean false):
    false
    0
    null
    undefined
    NaN
    ''

truthy - Anything not falsy
*/

/*
false || true       > true
false || 'Mosh'     > 'Mosh'
false || 1          > 1

// Short-circuiting
false || 1 || 2     > returns 1 (first operand that is truthy is returned in a logical OR operator)

*Result of operators is not necessarily true or false.  It depends on the operands we have.
*/

// Example: ** Power of using "LOGICAL OR OPERATOR BETWEEN NON-BOOLEANS TO GIVE YOU DEFAULT VALUES"
let userColor = "";
let defaultColor = "blue";
let currentColor = userColor || defaultColor; // use user color else default color
console.log("Current color? ", currentColor);
