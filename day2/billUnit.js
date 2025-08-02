let unit = Number(prompt("Please enter the number of units consumed:")); //700
amount = 0;

if (unit > 0 && unit <= 400) {
  amount = (unit - 400) * 13;//
  unit = 400;
}//400
if (unit > 200 && unit <= 400) {
  amount += (unit - 400) * 8;//
  unit = 200;
}//200

if (unit > 100 && unit <= 200) {
  amount += (unit - 200) * 6;//
  unit = 100;
}//100

amount += unit * 4; //100

console.log("Total amount for " + unit + " units is: " + amount);

