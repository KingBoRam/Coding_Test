const fs = require("fs");

const inputData = fs.readFileSync(0).toString().split("\n");

let A = Number(inputData[0].split(" ")[0]);
let B = Number(inputData[0].split(" ")[1]);
let C = Number(inputData[1]);
let D = Math.floor((B + C) / 60);

if (B + C >= 60) {
  if (A + D > 23) {
    A = A + D - 24;
    B = B + C - D * 60;
  } else {
    A = A + D;
    B = B + C - D * 60;
  }
  console.log(A + " " + B);
} else {
  B = B + C;
  console.log(A + " " + B);
}
