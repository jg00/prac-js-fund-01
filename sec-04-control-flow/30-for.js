console.log("--for--");

for (let i = 0; i < 13; i += 3) {
  if (i % 2 !== 0) console.log("odd " + i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log("odd asc " + i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log("odd desc " + i);
}
