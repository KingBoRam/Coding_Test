const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let A = iD[0].split(" ").map(Number);
let B = iD[1].split(" ").map(Number);
let C = "";

for (let i = 0; i < B.length; i++) {
  if (B[i] < A[1]) {
    C += B[i] + " ";
  }
}

console.log(C);
