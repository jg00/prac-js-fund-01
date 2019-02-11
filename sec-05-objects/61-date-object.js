const now = new Date();
const date1 = new Date("Jan 11 2019 09:00"); // See MDN > dateString for possible date formats
const date2 = new Date(2019, 0, 11, 9, 0); // Month is zero based ie 0-Jan

// Date() is a constructor function
console.log(now.constructor); // Date()

console.log(now);
console.log(date1); // Fri Jan 11 2019 09:00:00 GMT-0600 (Central Standard Time)
console.log(date2); // Fri Jan 11 2019 09:00:00 GMT-0600 (Central Standard Time)

// get...methods
console.log(now.getDate()); // returns day of month

// set...methods
date1.setFullYear(2018);
console.log(date1); // Thu Jan 11 2018 09:00:00 GMT-0600 (Central Standard Time)

// convert to date string - .toDateString()
console.log(date1.toDateString()); // Thu Jan 11 2018

// .toTimeString()
console.log(date1.toTimeString()); // 09:00:00 GMT-0600 (Central Standard Time)

// .toISOString()
// Commonly used in web/mobile appliations that talks to a backend.
// This is the format commonly used to transfer date between client/server.
console.log(date1.toISOString()); // 2018-01-11T15:00:00.000Z
