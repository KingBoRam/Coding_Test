const fs = require("fs");

const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => +x)
  );

let maxNum = 0;
let row = 0;
let column = 0;

for (let i = 0; i < iD.length; i++) {
  let arr = iD[i];
  for (let j = 0; j < arr.length; j++) {
    if (maxNum <= arr[j]) {
      maxNum = arr[j];
      row = i + 1;
      column = j + 1;
    }
  }
}
console.log(maxNum);
console.log(row + " " + column);
