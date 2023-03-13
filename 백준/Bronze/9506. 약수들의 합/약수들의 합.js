const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < iD.length; i++) {
  let num = iD[i];
  let arr = [];
  if (num === -1) {
    break;
  }
  for (let j = 0; j < num; j++) {
    if (num % j === 0) {
      arr.push(j);
    }
  }
  let sum = 0;
  for (let o = 0; o < arr.length; o++) {
    sum += arr[o];
  }
  if (num === sum) {
    console.log(num + " = " + arr.join(" + "));
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
