const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const [M, N] = iD[0].split(" ");
const arr = Array.from({ length: M }).fill(0);

for (let i = 1; i <= N; i++) {
  const line = iD[i].toString().trim().split(" ");
  for (let j = line[0] - 1; j <= line[1] - 1; j++) {
    arr[j] = line[2];
  }
}
console.log(arr.join(" "));
