// Show prime numbers within the limit
// Prime (has only two factors - 1 and itself)

// Version 1
// One way by checking to see if a number has more than two factors

showPrimes(100);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    // Count factors of a number
    let count = 0;
    for (let factor = 1; factor <= limit; factor++) {
      if (number % factor === 0) count++;
    }

    if (count > 2) continue;
    else console.log(number);
  }
}

// Version 2
/*
function getPrimeNumbers(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) isPrime = false;
      break;
    }
    if (isPrime) console.log(number);
  }
}

getPrimeNumbers(20);
*/
