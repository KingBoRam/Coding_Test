const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

let x = [];
let y = [];
for (let i = 0; i < iD.length; i++) {
  let arr = iD[i].toString().trim().split(" ");
  x.push(arr[0]);
  y.push(arr[1]);
}
x.sort((a, b) => a - b);
y.sort((a, b) => a - b);

let result = [];
if (x[0] === x[1]) {
  result.push(x[2]);
} else if (x[0] !== x[1]) {
  result.push(x[0]);
}
if (y[0] === y[1]) {
  result.push(y[2]);
} else if (y[0] !== y[1]) {
  result.push(y[0]);
}
console.log(result.join(" "));
