const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 0; i < iD.length; i++) {
  const arr = iD[i].trim();
  console.log(arr);
}
