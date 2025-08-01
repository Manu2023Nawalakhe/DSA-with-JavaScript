// areaOfTriangle.js

//using simple method
//   let base = Number(prompt("Please enter the base of the triangle"));
//   let height = Number(prompt("Please enter the height of the triangle"));
//   let area = (base * height) / 2; // Area of triangle = (base * height) / 2 (formula)
//   console.log(`The Area of base: ${base} and height: ${height} = ${area} `);

// using a Herons' formula find are of Tringle

let side1 = Number(prompt("Please enter the first side of the tringle"));
let side2 = Number(prompt("Please enter the second side of the tringle"));
let side3 = Number(prompt("Please enter the third side of the tringle"));
let semiParameter = (side1 + side2 + side3) / 2;
let calculatAred =
  semiParameter *
  (semiParameter - side1) * //20
  (semiParameter - side2) * //
  (semiParameter - side3);
let tringle = Math.sqrt(calculatAred);
console.log(
  `The Area of the tringle with sides ${side1}, ${side2}, and ${side3} is ${tringle}`
);
