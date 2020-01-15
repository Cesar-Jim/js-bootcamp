const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder

// Un-curried version of the function
const createAdderUnCurried = (a, b) => a + b;

// Curried version of the function
// The function is broken up in parts
const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(500));
console.log(add100(-50));

// Tipper
const tipper = percentage => {
  return amount => {
    return percentage * amount;
  };
};

const tip20 = tipper(0.2);
const tip30 = tipper(0.3);

console.log(tip20(100));
console.log(tip30(100));
