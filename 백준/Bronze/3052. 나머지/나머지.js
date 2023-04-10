const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = [];
for (let i = 0; i < iD.length; i++) {
  let num = iD[i] % 42;
  if (!result.includes(num)) {
    result.push(num);
  }
}
console.log(result.length);
