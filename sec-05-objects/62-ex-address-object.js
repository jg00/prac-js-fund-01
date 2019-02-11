// Create function and display address
let address = {
  street: "123 Deli St",
  city: "Bellevue",
  zipCode: 98004
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
