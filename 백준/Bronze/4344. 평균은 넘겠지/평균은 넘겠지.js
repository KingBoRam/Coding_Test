const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let testCase = Number(iD[0]);

for (let i = 1; i <= testCase; i++) {
  let sum = 0;
  let count = 0;
  let average = 0;
  let arrayCase = iD[i].split(" ").map(Number);
  const n = arrayCase[0];
  for (let j = 1; j <= n; j++) {
    sum += arrayCase[j];
  }
  average = Math.floor(sum / n);
  for (let k = 1; k <= n; k++) {
    if (arrayCase[k] > average) {
      count++;
    }
  }
  console.log(((count / n) * 100).toFixed(3) + "%");
}
