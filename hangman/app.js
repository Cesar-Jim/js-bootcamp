// Primitive values:
// Group 1: string, number, boolean --> these have properties and methods associated
// Group 2: null, undefined --> these are truly primitive values, they don't have properties or methods associated

// Prototype Chain:
// Object: myObject     --> Object.prototype    --> null
// Array: myArray       --> Array.prototype     --> Object.prototype  --> null
// Function: myFunction --> Function.prototype  --> Object.prototype  --> null
// String: myString     --> String.prototype    --> Object.prototype   --> null
// String: myNumber     --> Number.prototype    --> Object.prototype   --> null
// String: myBoolean    --> Boolean.prototype   --> Object.prototype   --> null

// Uses an 'OBJECT WRAPPER':
// const product = 'Computer';
// console.log(product);

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

// Uses a 'CONSTRUCTOR FUNCTION': (has access to properties & methods in the console)
// const otherProduct = new String('Phone');
// console.log(otherProduct);

// Hangman usage
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle('3', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

getCountry('BR', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Country name is ${country.name}`);
  }
});
