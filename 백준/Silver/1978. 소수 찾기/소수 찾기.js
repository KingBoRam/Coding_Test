const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = Number(iD[0]);

let sum = 0;
for (let i = 0; i < count; i++) {
  const arr = iD[1].split(" ");
  let divisor = [];
  for (let j = 0; j <= arr[i]; j++) {
    if (arr[i] % j === 0) {
      divisor.push(j);
    }
  }
  if (divisor.length === 2) {
    sum++;
  }
}
console.log(sum);
