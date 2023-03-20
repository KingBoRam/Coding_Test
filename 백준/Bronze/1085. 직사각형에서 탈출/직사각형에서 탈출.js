const fs = require("fs");
const [x, y, w, h] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const width = w - x;
const height = h - y;
const arr = [x, y, width, height];

console.log(Math.min(...arr));
