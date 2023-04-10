const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = Math.max(...iD);
console.log(result);
console.log(iD.indexOf(result) + 1);
