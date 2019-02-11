// Objects with values of different types

/*
let postObject = {
  title: "daily blog 1",
  body: "dreary weather",
  author: "ben simmons",
  views: 10,
  comments: [
    { author: "Jane Ross", body: "another day" },
    { author: "Cordy Ross", body: "winter" }
  ],
  isLive: true
};
*/

// Create constructor function for an empty post
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post("daily blog 1", "dreary weather", "ben simmons");
console.log(post);
