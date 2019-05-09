const person = {
  firstName: "John",
  lastName: "Wick",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);

person.fullName = "Martha Stewart";
console.log(person);
