const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let B = iD[1].split(" ");
let C = Number(iD[2]);
let sum = 0;

for (let i = 0; i < B.length; i++) {
  if (B[i] == C) {
    sum++;
  }
}

console.log(sum);