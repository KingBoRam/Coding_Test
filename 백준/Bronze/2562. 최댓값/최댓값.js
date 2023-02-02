const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let max = Math.max(...iD);
let count;

for (let i = 0; i < iD.length; i++) {
  if (iD[i] == max) {
    count = i + 1;
  }
}

console.log(max + "\n" + count);