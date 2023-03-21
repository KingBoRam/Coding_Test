const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

const times = iD[0];
iD.shift();

let x = [];
let y = [];
for (let i = 0; i < times; i++) {
  let arr = iD[i].toString().trim().split(" ").map(Number);
  x.push(arr[0]);
  y.push(arr[1]);
}

let width = Math.max(...x) - Math.min(...x);
let height = Math.max(...y) - Math.min(...y);

console.log(width * height);
