const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

// All movies in 2018 with rating > 4
// Sort by rating in descending order
// Display only title

/* 1 Breadown

// Filter
const filtered = movies.filter(
  movie => movie.year === 2018 && movie.rating >= 4
);

// Sort
filtered.sort((movieA, movieB) => {
  return movieA.rating < movieB.rating; 
});

// Display
const final = filtered.map(movie => {
  return movie.title;
});

console.log(filtered);
console.log(final);

*/

/*
// 2 Final result chained and ordered by descending order using sort() in ascending order and reverse()
const filtered = movies
  .filter(movie => movie.year === 2018 && movie.rating >= 4)
  .sort((movieA, movieB) => movieA.rating - movieB.rating) // this returns ascending order
  .reverse() // this reverses the order
  .map(movie => movie.title);

console.log(filtered);
*/

// 3 Final result but sorted directly in descending order without using reverse()
const filtered = movies
  .filter(movie => movie.year === 2018 && movie.rating >= 4)
  .sort((movieA, movieB) => movieB.rating - movieA.rating) // this returns descending order
  .map(movie => movie.title);

console.log(filtered);

/* Note on sort()
1 sort() method only works for numbers and strings
2a for objects we need to supply a comparison function
  sort((a,b) => {
    
    // basically if
    a < b   we want to return -1 (a neg value)
    a === b we want to return 0 (zero)
    a > b   we want to return 1 (a pos value)
  }

2b We can implement above like below
  sort((a,b) => a.rating - b.rating)

  ie:
  a = 4.5
  b = 4

  a - b
  4.5 - 4 = 0.5 (ie returns a pos value and that means a > b)


*/
