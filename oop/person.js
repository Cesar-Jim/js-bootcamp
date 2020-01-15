// Prototypal inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

// MAIN CLASS
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`; // arrow functions use whatever this the parent has;
    });

    return bio;
  }

  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// SUB-CLASSES
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.fullName} is a ${this.position}.`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing';

    return `${this.firstName} is ${status} the class.`;
  }

  updateGrade(change) {
    this.grade += change;
  }
}

const me = new Employee('Cesar', 'Jimenez', 42, 'Developer', []);
me.fullName = 'Clancey Turner';
console.log(me.getBio());

// ************************************************************* SYNTAX USED BEFORE THE CLASS SYNTAX (reference)
// ************************************************************* The example down below does the exact same thing as the program up above
// // Regular syntax (prototypal inheritance)
// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// // New prototype property
// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}.`;

//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} likes ${like}.`; // arrow functions use whatever this the parent has;
//   });

//   return bio;
// };

// // New prototype property
// Person.prototype.setName = function(fullName) {
//   const names = fullName.split(' ');
//   this.firstName = names[0];
//   this.lastName = names[1];
// };
