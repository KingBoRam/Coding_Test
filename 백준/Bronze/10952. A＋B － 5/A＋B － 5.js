const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let result = "";

for (i = 0; i < iD.length; i++) {
  let ex = iD[i].split(" ");
  if (ex[0] != 0 && ex[1] != 0) {
    result += Number(ex[0]) + Number(ex[1]) + "\n";
  }
}
console.log(result);