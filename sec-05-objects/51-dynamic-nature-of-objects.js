// Objects in Javascript are dynamic in nature ie you can always
// add/remove properties and methods

const circle = {
  radius: 1
};

circle.color = "yellow";
circle.color2 = "blue";
circle.draw = function() {
  console.log("draw");
};

delete circle.color2;

console.log(circle);
