const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const A = iD[0];
const B = iD[1];
const result = [A + B, A - B, A * B, Math.floor(A / B), A % B];
console.log(result.join("\n"));
