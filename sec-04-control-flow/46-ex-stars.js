// Show stars

showStars(10);

function showStars(rows) {
  let row = "";
  for (let i = 1; i <= rows; i++) {
    row += "*";
    console.log(row);
  }
}
