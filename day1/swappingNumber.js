//   let a = Number(prompt("Please enter the first number"));
//   let b = Number(prompt("Please enter the second number"));
//   console.log(`Before swapping: a = ${a}, b = ${b}`);
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(`After swapping: a = ${a}, b = ${b}`);
// Using arithmetic operations
// a = a + b; // a now becomes 30 (10 + 20)
// b = a - b; // b becomes 10 (30 - 20)

// without using a temp variable
// let a = Number(prompt("Please enter the first number"));
// let b = Number(prompt("Please enter the second number"));
// console.log(`Before swapping: a = ${a}, b = ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`After swapping: a = ${a}, b = ${b}`);

//using bitwise XOR
//   let a = Number(prompt("Please enter the first number"));
//   let b = Number(prompt("Please enter the second number"));
//   console.log(`Before swapping: a = ${a}, b = ${b}`);
// a = a ^ b; // a now becomes 30 (10 ^ 20)
// b = a ^ b; // b becomes 10 (30 ^ 20)
// a = a ^ b; // a becomes 20 (30 ^ 10)
//  console.log(`After swapping: a = ${a}, b = ${b}`);

// Swapping two numbers in JavaScript

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(`After swapping: x = ${x}, y = ${y}`);
