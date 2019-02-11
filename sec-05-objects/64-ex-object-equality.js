let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
let address3 = address1;

console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false
console.log(areSame(address1, address3)); // true

function Address(address, city, zipCode) {
  this.address = address;
  this.city = city;
  this.zipCode = zipCode;
}

// 1 Are the objects equal? Check properties.
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// 2 Are variables referencing the same object?
function areSame(address1, address2) {
  return address1 === address2;
}
