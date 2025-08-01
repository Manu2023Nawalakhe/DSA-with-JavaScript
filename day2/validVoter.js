let age = Number(prompt("Please enter a age")); //"if i enter a string it will be give me output You cannot vote but it should me give a NaN error then if i give a string then age variable will be NaN and it will give me output You cannot vote."

// we use a checker here but in JS NaN=== NaN is false, so we can use isNaN() to check if the value is not a number.
if (isNaN(age)) {
  console.log("Please enter a valid number for age.");
} else if (age >= 18) {
  console.log("You can vote."); // if i not use a Number() the JS engine will be asume age as a Number and it will give me output You can vote.
} else {
  console.log("You cannot vote.");
}
