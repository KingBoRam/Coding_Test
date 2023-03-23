const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = iD[0].split(" ").map(Number);
iD.shift();

let sum = 0;
for (let i = 0; i < N; i++) {
  let arr = iD[0].toString().trim().split(" ").map(Number);
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let result = arr[i] + arr[j] + arr[k];
      if (result <= M && result > sum) {
        sum = result;
      }
    }
  }
}
console.log(sum);
