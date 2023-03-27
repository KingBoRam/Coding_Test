const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

let arr = [];
for (let i = 0; i < iD; i++) {
  for (let j = 0; j < iD; j++) {
    if (5 * i + 3 * j === iD) {
      arr.push(i + j);
    }
  }
}
arr.sort((a, b) => a - b);
if (arr[0] === undefined) {
  console.log(-1);
} else {
  console.log(arr[0]);
}
