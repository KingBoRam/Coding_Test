const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

const count = Number(iD[0]);
let result = "";

for (i = 1; i < count + 1; i++) {
  let sum = iD[i].split(" ");
  result += Number(sum[0]) + Number(sum[1]) + "\n";
}

console.log(result);