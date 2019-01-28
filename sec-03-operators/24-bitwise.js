// 256 128 64 32 16 8 4 2 1

// 1 = 00000001
// 2 = 00000010

// R = 00000011 (Depending on column position if 1 OR 0 then 1)
console.log(1 | 2); // Bitwise OR; Result is 3

// R = 00000000 (Depending on column position if 1 AND 0 then 0)
console.log(1 & 2); // Bitwise AND; Result is 0

// 2 Practical use - User Permissions

//      Read, Write, Execute
// 00000 1 0 0  > User only has Read
// 00000 1 1 0  > User has Read and Write
// 00000 1 1 1  > User has Read, Write, Execute

const readPermission = 4; // set to a decimal number 4 equivalent to binary number 00000 1 0 0
const writePermission = 2;
const executePermission = 1;

// With BITWISE OR we can 'add' permissions
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission); // 6

// With BITWISE AND we can 'check' permissions
// This is how we can check if we have readPermission
let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
