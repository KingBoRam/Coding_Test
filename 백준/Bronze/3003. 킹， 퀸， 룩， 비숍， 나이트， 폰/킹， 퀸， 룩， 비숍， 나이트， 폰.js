const fs = require("fs");

const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];

const result = chess.map((list, idx) => list - inputData[idx]);

console.log(result.join(" "));
