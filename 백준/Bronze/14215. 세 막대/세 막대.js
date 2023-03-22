const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(Number);

iD.sort((a, b) => a - b);
if (iD[2] >= iD[0] + iD[1]) {
  console.log((iD[0] + iD[1]) * 2 - 1);
} else {
  console.log(iD[0] + iD[1] + iD[2]);
}
