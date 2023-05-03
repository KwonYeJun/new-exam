import { Calculator } from "./module/modules.js";
// import fs from "fs";
const test = new Calculator();
test.fs(
  fs.readFile("./module/modules.js", "utf-8", (err, data) =>{})
)

console.log(test.add(4,6));
console.log(test.minus(4,6));
console.log(test.divide(4,6));
console.log(test.multiply(4,6));