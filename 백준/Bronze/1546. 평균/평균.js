const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("\n");

let count = Number(iD[0]);
let score = iD[1].split(" ").map(Number);
let maxScore = Math.max(...score);
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += score[i];
}
let cal = ((sum / (maxScore * count)) * 100).toFixed(2);
console.log(cal);
