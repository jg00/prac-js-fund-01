// 1 Value types are independent of each other
let x = 10;
let y = x; // value of x copied to y

x = 20;
console.log(x, y); // 20, 10

// 2 Object types.  Object stored somewhere in memory and the address of that memory location is stored in that variable
let a = { value: 10 };
let b = a; // Here the address(or the reference) of the object in memory is copied to the new variable

a.value = 20;
console.log(a, b); // {value: 20}, {value: 20}
