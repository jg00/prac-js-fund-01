// global scope
const color = "red";

function start() {
  const message = "hi";

  if (true) {
    console.log("if block", message); // hi

    const color = "blue"; // takes prededences over the global color in this block
    console.log("if block:", color); // blue
  }

  for (let i = 0; i < 5; i++) {
    console.log("loop block:", i);
  }

  console.log("function block:", color); // red

  //   console.log(i); // out of scope
}

// console.log(message); // out of scope

console.log("outside function block:", color); // red (displays 1st)

start();
