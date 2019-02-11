// Objects with values of different types
let postObject = {
  title: "daily blog 1",
  body: "dreary weather",
  author: "ben simmons",
  counter: 0,
  views() {
    this.counter++;
  },
  comments: [
    { author: "Jane Ross", body: "another day" },
    { author: "Cordy Ross", body: "winter" }
  ],
  isLive: false
};

console.log(postObject.counter);
postObject.views();
console.log(postObject.counter);
postObject.views();
console.log(postObject.counter);
