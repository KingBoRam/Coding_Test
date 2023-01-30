const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

const count = Number(iD[0]);

let result = "";

for (i = 1; i <= count; i++) {
  let ex = iD[i].split(" ");
  result += "Case #" + i + ": " + (Number(ex[0]) + Number(ex[1])) + "\n";
}
console.log(result);