const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = iD.shift();
let answer = [];
const stack = [];
let count = 1;

for (let i = 0; i < n; i++) {
  let num = iD[i];
  while (count <= num) {
    stack.push(count);
    count++;
    answer.push("+");
  }
  let stackpop = stack.pop();
  answer.push("-");
  if (stackpop !== num) {
    answer = ["NO"];
    break;
  }
}
console.log(answer.join("\n"));