const fs = require("fs");

const inputData = fs.readFileSync(0).toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

let AA = A == B && B == C;
let BB = (A == B && B != C) || (A == C && A != B) || (C == B && B != A);
let CC = A != B && B != C && A != C;
if (AA) {
  console.log(10000 + A * 1000);
} else if (BB) {
  if ((A == B && B != C) || (A == C && A != B)) {
    console.log(1000 + A * 100);
  } else if (C == B && B != A) {
    console.log(1000 + C * 100);
  }
} else if (CC) {
  console.log(Math.max(A, B, C) * 100);
}
