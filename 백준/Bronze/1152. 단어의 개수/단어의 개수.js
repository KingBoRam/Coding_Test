const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split(" ");

let count = 0;
for (let i = 0; i < iD.length; i++) {
  if (iD[i].length > 0) {
    count++;
  }
}

console.log(count);
