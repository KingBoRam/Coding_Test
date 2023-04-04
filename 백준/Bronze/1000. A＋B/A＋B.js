const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const result = iD[0] + iD[1];
console.log(result);
