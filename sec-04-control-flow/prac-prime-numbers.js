// showPrime version 1
function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number, isPrime);
    }
  }
}

showPrime(20);

// showPrime2 version two
function isPrimeV2(limit) {
  for (let number = 2; number <= limit; number++) {
    let countNumberFactors = 0;
    for (let factor = 2; factor <= limit; factor++) {
      if (number % factor === 0) countNumberFactors++;
    }
    if (countNumberFactors < 2) console.log(number);
  }
}

isPrimeV2(20);
