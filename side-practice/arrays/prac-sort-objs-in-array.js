const courses = [{ id: 5, name: "Node.js" }, { id: 2, name: "javaScript" }];

courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log("By name: ", courses);

courses.sort((a, b) => a.id - b.id);
console.log("By id (asc): ", courses);

courses.sort((a, b) => b.id - a.id);
console.log("By id (desc): ", courses);
