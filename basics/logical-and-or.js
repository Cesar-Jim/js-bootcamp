// ************************************************************ LOGICAL OPERATORS
let temp = 55;

if (temp >= 60 && temp <= 90) {
  // Logical AND operator
  console.log('It is pretty nice out!');
} else if (temp <= 0 || temp >= 120) {
  // Logical OR operator
  console.log('Do not go outside. It is DANGEROUS!');
} else {
  console.log('Meh. Do what you want');
}

// Challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('MAke sure to offer up some vegan options.');
} else {
  console.log('Offer up anything on the menu.');
}
