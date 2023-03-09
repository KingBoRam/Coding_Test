const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = iD.shift();

for (let i = 0; i < T; i++) {
  const k = iD.shift(); //층
  const n = iD.shift(); //호
  const house = Array.from(Array(k + 1), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    house[0][i] = i + 1;
  }
  for (let i = 1; i <= k; i++) {
    house[i][0] = 1;
    for (let j = 1; j < n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n - 1]);
}
