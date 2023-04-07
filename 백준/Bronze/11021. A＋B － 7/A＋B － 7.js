const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD.shift();

for (let i = 0; i < count; i++) {
  const arr = iD[i].toString().trim().split(" ").map(Number);
  console.log(`Case #${i + 1}: ${arr[0] + arr[1]}`);
}
