// 1 Filter primitives
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(number => number >= 0);
console.log(filtered);

// 2 Filter objects
const restaurants = [
  { id: 1, name: `Luby's`, type: "sitdown" },
  { id: 2, name: `Denny's`, type: "sitdown" },
  { id: 3, name: `Shipley's`, type: "fastfood" }
];

const sitDownRestaurants = restaurants.filter(
  restaurant => restaurant.type === "sitdown"
);
console.log(sitDownRestaurants);
