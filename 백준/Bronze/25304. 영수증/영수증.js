const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const price = +iD.shift();
const count = +iD.shift();

let sum = 0;
for (let i = 0; i < count; i++) {
  let arr = iD[i].toString().trim().split(" ");
  sum += arr[0] * arr[1];
}

if (price === sum) {
  console.log("Yes");
} else {
  console.log("No");
}
