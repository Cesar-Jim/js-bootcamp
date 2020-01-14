const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'Playing...';
};

// sendFinalStatus added to prototype
Hangman.prototype.getStatusMessage = function() {
  if (this.status === 'Playing...') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'Failed! :(') {
    return `Nice try! The word was "${this.word.join('')}"`;
  } else {
    return 'Great work! You guessed the word.';
  }
};

// getPuzzle method gets added to the prototype
Hangman.prototype.getPuzzle = function() {
  let puzzle = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return puzzle;
};

// makeGuess method gets added to the prototype
Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (this.status !== 'Playing...') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.guessedLetters.push(guess);
    this.remainingGuesses--;
  }

  this.calculateStatus();
};

// calculateStatus method added to the prototype
Hangman.prototype.calculateStatus = function() {
  // METHOD 1: using FOREACH
  // let finished = true;

  // this.word.forEach(letter => {
  //   if (this.guessedLetters.includes(letter)) {
  //   } else {
  //     finished = false;
  //   }
  // });

  // METHOD 2: using FILTER
  // const lettersUnguessed = this.word.filter(letter => {
  //   return !this.guessedLetters.includes(letter);
  // });
  // const finished = lettersUnguessed.length === 0;

  // Method 3: using EVERY
  const finished = this.word.every(letter => {
    return this.guessedLetters.includes(letter);
  });

  if (this.remainingGuesses === 0) {
    this.status = 'Failed! :(';
  } else if (finished) {
    this.status = 'Finished! :)';
  } else {
    this.status = 'Playing...';
  }
};
