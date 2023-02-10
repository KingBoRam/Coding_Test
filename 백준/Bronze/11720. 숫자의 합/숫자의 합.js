const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let count = Number(iD[0]);
let num = iD[1];
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += Number(num[i]);
}

console.log(sum);
