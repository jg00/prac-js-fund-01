// FizzBuzz
// Check input is a number
// If input is divisible by 3 and 5 > FizzBuzz
// If input is divisible by 3 > Fizz
// If input is divisible by 5 > Buzz
// If not divisible > return the input

console.log(fizzBuzz(15));

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  return input;
}
