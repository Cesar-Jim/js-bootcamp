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
let game1;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  // My solution:
  // let word = game1.puzzle;
  // let newWord = '';
  // word = word.split('');
  // word = word.forEach(letter => (newWord += `<span>${letter}</span>`));

  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2')
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// // *************************************************** FETCH
// getCountry('PL')
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // ************************************************* CHALLENGE
// getLocation()
//   .then(location => {
//     console.log(
//       `You are currently in: ${location.city}, ${location.region} (${location.country})`,
//     );
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// // ************************************************* CHALLENGE2
// getLocation()
//   .then(location => {
//     return getCountry(location.country);
//   })
//   .then(data => {
//     console.log(data.name);
//   });

// *************************************************** USING PROMISES "MANUALLY"
// getCountry('MX').then(
//   country => {
//     console.log(country.name);
//   },
//   err => {
//     console.log(`Error : ${err}`);
//   },
// );

// *************************************************** USING FETCH WITH ALL THE DETAILS
// fetch('http://puzzle.mead.io/puzzle', {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Unable to fetch the puzzle');
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(error => {
//     console.log(error);
//   });
