// 1 Logical AND &&
// Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(false && false); // false

// 1b
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible for loan? " + eligibleForLoan);

// 2 Logical OR ||
console.log(false || false); // false
console.log(true || false); // true

// 3 NOT (!)
let applicationRefused = !eligibleForLoan; // !(false) = true
console.log("Is application refused? " + applicationRefused);
