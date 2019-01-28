console.log("--break-continue--");

let i = 0;
while (i <= 10) {
  //   if (i === 5) break;

  // Increment when i is an even number
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
