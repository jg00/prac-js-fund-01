// 1st version - Calculate total interest
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
// console.log(interest(10000, 3.5, 5));

// 2nd version - Calculate total interest.  Using this syntax requires every other parameter to have a default value.
function interest2(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest2(10000));
