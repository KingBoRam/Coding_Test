const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("\n");

for (i = 0; i < iD.length; i++) {
  let ex = iD[i].split(" ");
  console.log(Number(ex[0]) + Number(ex[1]));
}
