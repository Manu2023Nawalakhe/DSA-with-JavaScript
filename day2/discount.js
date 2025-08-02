let amount = Number(prompt("Please enter the amount to be discounted:"));

if (amount > 0 && amount <= 5000) {
  console.log("Discount is 0%: " + amount);
} else if (amount > 5001 && amount <= 7000) {
  console.log("Discount is 5%: " + amount - Math.floor((amount * 5) / 100));
} else if (amount > 7001 && amount <= 9000) {
  console.log("Discount is 10%: " + amount - Math.floor((amount * 10) / 100));
} else if (amount > 9000) {
  console.log("Discount is 20%: " + amount - Math.floor((amount * 20) / 100));
}

//Do not repeat Yourself (DRY) principle:
let amount1 = Number(prompt("Please enter the amount to be discounted:"));
dis = 0;

if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5001 && amount <= 7000) {
  dis = 5;
} else if (amount > 7001 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
}

console.log("Discount is 20%: " + amount - Math.floor((dis * amount) / 100));
