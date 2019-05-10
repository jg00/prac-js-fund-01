/*
    - The 'this' references the object that is executing the current function
    - If the function is part of an object, we call that function a method.
      So if that function is a method in the object, 'this' references that object itself.
    - If that function is a regular function (ie not part of an object), 'this' references the 
      global object (window obj in browsers, global in node)
*/

const video = {
  title: "Sleepless In Seattle",
  tags: ["a", "b", "c"],

  showTags() {
    console.log(this);
  },

  showTags2() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },

  showTags3() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

console.log("a:");
video.showTags(); // 'this' references the object that is executing the current function
console.log("");

console.log("b: .bind()");
video.showTags2(); // 'this' inside function(tag) (ie regular function and not a method) references window object
console.log("");

console.log(
  "c: arrow function inherits 'this' from the 'containing function' "
);
video.showTags3(); // 'this' inside function(tag) (ie regular function and not a method) references window object
console.log("");

console.log(
  "d: .bind() - example of changing and specifying which object 'this' references "
);
function playVideo() {
  console.log(this);
}

playVideo.bind(video)(); // remember .bind() returns a new function that is always bound to the object specified.

console.log("");
