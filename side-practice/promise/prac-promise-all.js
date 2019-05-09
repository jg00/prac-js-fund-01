const path = require("path");
const fs = require("fs");
const files = [
  path.join(__dirname, "../files/demofile.txt"),
  path.join(__dirname, "../files/demofile.other.txt")
];

function readFile(path, encoding) {
  return new Promise((response, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else response(data);
    });
  });
}

// collect promises
let promises = files.map(path => readFile(path, "utf8"));

Promise.all(promises)
  .then(data => console.log(data))
  .catch(err => console.log(err));

/*
// Read one file
readFile("./files/demofile.txt", "utf8")
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
*/
