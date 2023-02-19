const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
let count = Number(iD[0]);
let num = 0;
for (let i = 1; i <= count; i++) {
  let A = iD[i];
  let arr = [];
  for (let j = 0; j < A.length; j++) {
    if (!arr.includes(A[j])) {
      arr.push(A[j]);
    } else if (A[j] == A[j - 1]) {
      arr.push(A[j]);
    }
  }
  if (A === arr.join("")) {
    num++;
  }
}
console.log(num);