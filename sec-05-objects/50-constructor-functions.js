// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

let circle = new Circle(1);
console.log(circle);

/*
new operator:
1 creates an empty object {}
2 'this' keyword references (points to) the empty object and sets 
  the property radius and draw method to this object
3 the object is returned

NOTE: If you do not use the 'new' keyword, 'this' keyword will reference
the global 'window' object.
*/
