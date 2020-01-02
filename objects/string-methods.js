// ************************************************************ STRING METHODS
let name = '  Cesar Jimenez  ';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));
console.log(password.includes('past'));

// Trim
console.log(name.trim());

// Challenge
let isValidPassword = function(password) {
  return password.length >= 8 && !password.includes('password');
};

console.log(isValidPassword('asdpf')); // false
console.log(isValidPassword('abc123!@#$%^&')); // true
console.log(isValidPassword('abc123!password@#$%^&')); // false
