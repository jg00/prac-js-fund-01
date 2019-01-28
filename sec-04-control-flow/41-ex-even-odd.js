// Display odd or even for each number up to limit
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
  }
}
