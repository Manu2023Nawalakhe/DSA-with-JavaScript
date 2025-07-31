console.log(Math.round(4.5)); //5
console.log(Math.round(4.4)); //4
// what happend in the rounde in value after the decimal point is less that 5 it will round down and if it is greater than or equal to 5 it will round up

console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
// ceil will always round up to the next integer and floor will always round down to the next integer

console.log(Math.trunc(4.9)); //4
// trunc will remove the decimal part and return the integer part only

console.log(Math.pow(2, 3)); //8
// pow will return the result of raising the first argument to the power of the second argument

console.log(Math.sqrt(16)); //4
// sqrt will return the square root of the given number

console.log(Math.cbrt(27)); //3
// cbrt will return the cube root of the given number

console.log(Math.abs(-5)); //5
// abs will return the absolute value of the given number(convert negative to positive)

console.log(Math.min(1, 2, 3, -1, 0)); //-1
console.log(Math.max(1, 2, 3, -1, 0)); //3
// min will return the smallest value and max will return the largest value from the given arguments

console.log(Math.random()); //random number between 0 and 1
console.log(Math.random() * 10); //random number between 0 and 10

console.log(Math.toFixed(2.34567, 2)); //2.35
// toFixed is not a method of Math, it is a method of Number prototype
