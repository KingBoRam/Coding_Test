const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
iD.shift();
const X = iD.toString().trim().split(" ").map(Number);
const set = new Set(X);
const arr = [...set].sort((a, b) => a - b);
const obj = {};
const ans = [];
arr.forEach((v, i) => {
  obj[v] = i;
});

for (let i of X) {
  ans.push(obj[i]);
}
console.log(ans.join(" "));
