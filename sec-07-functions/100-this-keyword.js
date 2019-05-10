/*
    - The 'this' references the object that is executing the current function
    - If the function is part of an object, we call that function a method.
      So if that function is a method in the object, 'this' references that object itself.
    - If that function is a regular function (ie not part of an object), 'this' references the 
      global object (window obj in browsers, global in node)
*/

console.log("--1--");
console.log("");

// 1 Method in an object
const video = {
  title: "a",
  play() {
    console.log(this);
  }
};

// add a function to video object
video.stop = function() {
  console.log(this);
};

// both references the same object that is executing the current functions
video.play();
video.stop();

console.log("");
console.log("--2--");
console.log("");

// 2 Regular function
function playVideo() {
  console.log(this);
}

// playVideo();

console.log("");
console.log("--3--");
console.log("");

// 3 What if we have a 'constructor function'?  We call constructor functions using 'new' operator.
function Video(title) {
  this.title = title;
  console.log(this);
}

// So here 'this' refers to a new video object instead of the window object.
const v = new Video("b");

console.log("");
console.log("--4--");
console.log("");

// 4
const video2 = {
  title: "Sleepless In Seattle",
  tags: ["a", "b", "c"],

  showTags() {
    console.log(this);
  },

  showTags2() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  }
};

console.log("a:");
video2.showTags(); // 'this' references the object that is executing the current function
console.log("");

console.log("b:");
// The function(tag) is 'not' a method inside the video2 object.
// The 'this' inside the function(tag) (is a callback function) inside forEach
// is just a 'regular function' (it is not a 'method' in the video2 object)
// and therefore 'this' references the 'window' object.

// You therefore have to specify the object you want 'this' to reference.
// In this case, the forEach() has a sceond argument where you can specify the object you want 'this' to reference.
// Otherwise you can use .bind(), .apply(), call() to that 'regular function'.
video2.showTags2();
console.log("");
