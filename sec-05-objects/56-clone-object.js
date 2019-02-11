const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

// 1 One approach
const another = {};
another["color"] = "yellow";
for (let key in circle) another[key] = circle[key];
console.log(another);

// 2 Approach using Object.assign(targetObj, sourceObj)
let another2 = Object.assign({ color: "yellow" }, circle);
console.log(another2);

// 3 Approach using spread operator
let another3 = { color: "yellow", ...circle };
console.log(another3);
