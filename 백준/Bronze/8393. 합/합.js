const fs = require("fs");

const inputData = fs.readFileSync(0);

let sum = 0;

for (i = 1; i <= inputData; i++) {
  sum += i;
}

console.log(sum);