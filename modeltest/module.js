import add from "./add.js";
import minus from "./minus.js";
import multiply from "./multiply.js";
import divide from "./divide.js";

export class Calculator {
  constructor() {}
  add(a, b) {
    return add(a, b);
  }

  minus(a, b) {
    return minus(a, b);
  }

  multiply(a, b) {
    return multiply(a, b);
  }

  divide(a, b) {
    return divide(a, b);
  }
}

// const test = new Calculator();
// console.log(test.add(2,3));
// console.log(test.minus(2,3));
// console.log(test.multiply(2,3));
// console.log(test.divide(2,3));