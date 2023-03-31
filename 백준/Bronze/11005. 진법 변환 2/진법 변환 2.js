const fs = require("fs");
const [tenNum, binary] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = tenNum.toString(binary);
console.log(result.toUpperCase());
