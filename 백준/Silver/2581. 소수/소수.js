const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const M = +iD[0];
const N = +iD[1];

let sum = [];
for (let i = M; i <= N; i++) {
  let num = i;
  let divisor = [];
  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      divisor.push(j);
    }
  }
  if (divisor.length === 2) {
    sum.push(num);
  }
}
if (sum.length === 0) {
  console.log(-1);
} else {
  let minNum = Math.min(...sum);
  let sumNum = sum.reduce((a, b) => a + b, 0);
  console.log(sumNum);
  console.log(minNum);
}
