// Show prime numbers within the limit
// Prime (has only two factors - 1 and itself)

// Version 1
// One way by checking to see if a number has more than two factors

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= 20; number++) {
    // Count factors of a number
    let count = 0;
    for (let factor = 1; factor <= 20; factor++) {
      if (number % factor === 0) count++;
    }

    if (count > 2) continue;
    else console.log(number);
  }
}

// Version 2
/*
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= 20; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) isPrime = false;
      break;
    }
    if (isPrime) console.log(number);
  }
}
*/
