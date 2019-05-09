const path = require("path");
const fs = require("fs");
const files = path.join(__dirname, "../files/demofile.txt");

function readFile(path, encoding) {
  return new Promise((response, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else response(data);
    });
  });
}

// Read one file
readFile(files, "utf8")
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
