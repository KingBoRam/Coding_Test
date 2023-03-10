const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let A = iD[0];
let B = iD[1];

let arr = [];
for (let i = 1; i <= A; i++) {
  if (A % i === 0) {
    arr.push(i);
  }
}
let result = arr[B - 1];
if (arr.length < B) {
  console.log(0);
} else {
  console.log(result);
}
