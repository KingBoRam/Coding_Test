const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const [count, num] = iD[0].toString().trim().split(" ").map(Number);
const arr = iD[1].toString().trim().split(" ").map(Number);
const result = arr.filter((v) => {
  return v < num;
});
console.log(result.join(" "));
