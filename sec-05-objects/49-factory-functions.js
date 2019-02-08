// Create factory function
function createCircle(radius) {
  return (circle = {
    radius,
    draw() {
      console.log("radius", radius);
    }
  });
}

let circle1 = createCircle(1);
let circle2 = createCircle(2);
circle1.draw();
circle2.draw();
