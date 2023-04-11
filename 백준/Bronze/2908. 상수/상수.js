const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ");

let A = "";
let B = "";

const arr = iD[0].trim().split("");
arr.reverse();
for (let i = 0; i < arr.length; i++) {
  A += arr[i];
}
const arr2 = iD[1].trim().split("");
arr2.reverse();
for (let i = 0; i < arr2.length; i++) {
  B += arr2[i];
}
if (Number(A) > Number(B)) {
  console.log(Number(A));
} else {
  console.log(Number(B));
}
