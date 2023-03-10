const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < iD.length; i++) {
  let line = iD[i].split(" ").map(Number);
  let A = line[0];
  let B = line[1];
  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else if (A === B) {
    continue;
  } else {
    console.log("neither");
  }
}
