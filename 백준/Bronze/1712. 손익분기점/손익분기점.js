const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ");
let [A, B, C] = [iD[0], iD[1], iD[2]];

let answer = Math.floor(A / (C - B)) + 1;
if (C - B <= 0) {
  console.log(-1);
} else {
  console.log(answer);
}