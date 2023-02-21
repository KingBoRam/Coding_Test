const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < iD.length; i++) {
  let str = iD[i].trim();
  console.log(str);
}
