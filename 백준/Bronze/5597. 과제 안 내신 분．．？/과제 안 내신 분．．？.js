const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = [];
for (let i = 1; i <= 30; i++) {
  if (!iD.includes(i)) {
    result.push(i);
  }
}
console.log(result.join("\n"));
