// String primitive
const message = "This is my first message ";
console.log(typeof message); // string

/*
    Note that when we use the dot notation for a string primitive,
    Javascript engine internally wraps this with a string object. 
    This gives us access to String object properties and methods.
*/

// String object
const another = new String("hi");
console.log(typeof another); // object

// .lenght property
console.log(message.length); // 24

// Access character at given index
console.log(message[0]); // 'T'
console.log(message[1]); // 'h'

// .inclues()
console.log(message.includes("my")); // true

// .startsWith()
console.log(message.startsWith("This")); // true
console.log(message.startsWith("this")); // false

// indexOf()
console.log(message.indexOf("T")); // 0
console.log(message.indexOf("my")); // 8

// .replace() - returns a new string
console.log(message.replace("first", "FIRST")); // This is my FIRST message
console.log(message); // This is my first message

// .toUpperCase() - returns a new string
console.log(message.toUpperCase()); // THIS IS MY FIRST MESSAGE
console.log(message); // This is my first message

// .trim() - returns a new string
console.log(message.trim()); // This is my first message
console.log(message); // This is my first message' ' < still has space at the end

// Escape notation - MDN
/*
    \0 the NULL character
    \' single quote
    \n new line
    \r carraige return
    \v vertical tab
    \t tab
*/

// .split() - returns array
console.log(message.split(" ")); // (6) ["This", "is", "my", "first", "message", ""]
