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

let arr = new Array(100).fill().map((v) => new Array(100).fill(false));

for (let i = 1; i < iD.length; i++) {
  let fill = iD[i];
  let x = fill[0];
  let y = fill[1];
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      arr[x + j][y + k] = true;
    }
  }
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let arr2 = arr[i];
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] === true) {
      count++;
    }
  }
}
console.log(count);