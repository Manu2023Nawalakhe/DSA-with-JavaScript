// Unary ++ --

// let a = true;
// a++;
// console.log(a); //2

// inside a js file, unary operators can be used to increment boolean values
// js engine assume that true is 1 and false is 0


// we can't use unary operators on the constants values directry

// 15++;
// SyntaxError: Invalid left-hand side expression in postfix operation


// one interviwe question
// what is the output of the following code?

let a = 10;
let b = ++(a++); //error  first solve brackts ++11 the reason is error we cant use unary operator on the constant value
// SyntaxError: Invalid left-hand side expression in postfix operation

console.log(b);
