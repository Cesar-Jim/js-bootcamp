// Protoypal inheritance

const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// New prototype property
Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach(like => {
    bio += ` ${this.firstName} likes ${like}.`; // arrow functions use whatever this the parent has;
  });

  return bio;
};

// New prototype property
Person.prototype.setName = function(fullName) {
  const names = fullName.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person('Cassia', 'Jimenez', 42, ['Web development', 'Piano']); // this is a custom object type. This is also a constructor function (using new)

me.setName('Alexis Turner');
console.log(me.getBio());

const person2 = new Person('Clancey', 'Turner', 51);
console.log(person2.getBio());
