const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let count = Number(iD[0]);

for (let i = 1; i <= count; i++) {
  let sum = 0;
  let num = 0;
  for (j = 0; j < iD[i].length; j++) {
    if (iD[i][j] == "O") {
      sum = sum + 1;
      num += sum;
    } else {
      sum = 0;
    }
  }
  console.log(num);
  num = 0;
}
