// Primitive values:
// Group 1: string, number, boolean --> these have properties and methods associated
// Group 2: null, undefined --> these are truly primitive values, they don't have properties or methods associated

// Prototype Chain:
// Object: myObject     --> Object.prototype    --> null
// Array: myArray       --> Array.prototype     --> Object.prototype  --> null
// Function: myFunction --> Function.prototype  --> Object.prototype  --> null
// String: myString     --> String.prototype    --> Object.protoype   --> null
// String: myNumber     --> Number.prototype    --> Object.protoype   --> null
// String: myBoolean    --> Boolean.prototype   --> Object.protoype   --> null

// Uses an 'OBJECT WRAPPER':
// const product = 'Computer';
// console.log(product);

// Uses a 'CONSTRUCTOR FUNCTION': (has access to properties & methods in the console)
// const otherProduct = new String('Phone');
// console.log(otherProduct);

// Hangman usage
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});
