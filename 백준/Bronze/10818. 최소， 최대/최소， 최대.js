const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n");

let B = iD[1].split(" ").map(Number);
let max = Math.max(...B);
let min = Math.min(...B);

console.log(min + " " + max);