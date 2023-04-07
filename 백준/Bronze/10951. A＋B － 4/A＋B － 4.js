const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const result = [];
for (let i = 0; i < iD.length; i++) {
  const arr = iD[i].toString().trim().split(" ").map(Number);
  result.push(arr[0] + arr[1]);
}
console.log(result.join("\n"));
