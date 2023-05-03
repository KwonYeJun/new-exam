import add from "./add.js";
import minus from "./minus.js";
import multiply from "./multiply.js";
import divide from "./divide.js";
import fs from "fs";
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
  // 파일을 읽어서 계산하는 메서드
  // ! gpt 도움을 받음
  // calculateFromFile(filePath) {
  //   const fileContent = fs.readFileSync(filePath, 'utf8');
  //   const [a, b] = fileContent.split(',').map(Number);

  //   const sum = this.add(a, b);
  //   const diff = this.minus(a, b);
  //   const product = this.multiply(a, b);
  //   const quotient = this.divide(a, b);

  //   return { sum, diff, product, quotient };
  // }
}

// const test = new Calculator();
// console.log(test.add(2,3));
// console.log(test.minus(2,3));
// console.log(test.multiply(2,3));
// console.log(test.divide(2,3));
