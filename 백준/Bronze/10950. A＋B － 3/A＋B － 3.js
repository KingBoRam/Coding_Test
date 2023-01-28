const fs = require("fs");

const inputData = fs.readFileSync(0).toString().split("\n");

for (let i = 1; i <= inputData[0]; i++) {
  let ex = inputData[i].split(" ");
  console.log(Number(ex[0]) + Number(ex[1]));
}
