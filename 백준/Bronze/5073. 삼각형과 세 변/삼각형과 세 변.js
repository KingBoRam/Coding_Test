const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < iD.length; i++) {
  let arr = iD[i].toString().trim().split(" ").map(Number);
  if (arr[0] + arr[1] + arr[2] === 0) {
    continue;
  }
  arr.sort((a, b) => a - b);
  let num = 0;
  let check = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== check) {
      check = arr[j];
      num++;
    }
  }
  if (arr[2] >= arr[0] + arr[1]) {
    console.log("Invalid");
  } else if (num === 1) {
    console.log("Equilateral");
  } else if (num === 2) {
    console.log("Isosceles");
  } else if (num === 3) {
    console.log("Scalene ");
  }
}