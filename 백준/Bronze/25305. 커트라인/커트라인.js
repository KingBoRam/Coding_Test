const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

const lineOne = iD[0].split(" ");
const lineTwo = iD[1].split(" ");
const k = +lineOne[1];
let x = lineTwo.sort((a, b) => {
  return b - a;
});

console.log(x[k - 1]);
