const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

iD.sort((a, b) => {
  return a - b;
});
let result = iD.reduce((prev, cur) => {
  return (prev += cur);
}, 0);
console.log(result / 5);
console.log(iD[2]);
