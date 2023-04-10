const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD[0];
const arr = iD[1].toString().trim().split(" ").map(Number);

const maxNum = Math.max(...arr);
const sum = arr.reduce((prev, cur) => {
  return (prev += cur);
});
const result = ((sum / maxNum) * 100) / count;

console.log(result.toFixed(2));
