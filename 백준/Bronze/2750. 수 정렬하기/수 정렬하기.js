const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
iD.shift();
function fn(a, b) {
  return a - b;
}
iD.sort(fn);
console.log(iD.join("\n"));
