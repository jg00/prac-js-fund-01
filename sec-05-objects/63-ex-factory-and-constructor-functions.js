// 1 Create a factory function and initialize an Object
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

console.log(createAddress("123 Deli St", "Bellevue", 98004));

// 2 Create a constructor function and initialize an Objects
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(new Address("123 Deli St", "Bellevue", 98004));
