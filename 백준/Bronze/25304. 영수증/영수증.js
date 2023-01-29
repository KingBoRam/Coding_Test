const fs = require("fs");
/**iD =inputData */
const iD = fs.readFileSync(0).toString().split("\n");

const price = Number(iD[0]);
const count = Number(iD[1]);

let sum = 0;

for (i = 2; i <= count + 1; i++) {
  let cal = iD[i].split(" ").map(Number);
  sum += cal[0] * cal[1];
}
if (price == sum) {
  console.log("Yes");
} else {
  console.log("No");
}
