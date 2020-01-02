// ************************************************************ BOOLEAN TYPE
// === : equality operator
// !== : not equal operator
// < : less than operator
// > : greater than operator
// <= : less than or equal to operator
// >= : greater than or equal to operator

// Example
let temp = 4;
let isFreezing = temp <= 32;

// Challenge: advanced if statements
if (temp <= 32) {
  console.log('Is freezing outside!');
} else if (temp >= 110) {
  console.log('It is too hot outside!');
} else {
  console.log('Go for it. It is pretty nice out!');
}

console.log(isFreezing);

// Challenge: Booleans
let age = 66;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);

// Challenge: If statements
if (isChild) {
  console.log('Eligible for a child discount!');
}

if (isSenior) {
  console.log('Eligible for a senior discount!');
}
