const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
let count = Number(iD[0]);

for (let i = 1; i <= count; i++) {
  let leng = iD[i].trim().length;
  let str = iD[i][0] + iD[i][leng - 1];
  console.log(str);
}
