// Sample array of objects
let priceRange = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [{ averagePerPerson: 5 }];

for (let element of priceRange) {
  console.log(element.label, element.tooltip);
}
