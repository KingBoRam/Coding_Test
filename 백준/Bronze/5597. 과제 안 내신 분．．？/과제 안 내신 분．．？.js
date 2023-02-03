const fs = require("fs");

const iD = fs.readFileSync(0).toString().split("\n").map(Number);

let iD2 = Array.from({ length: 30 }, (v, i) => i + 1);

let difference = iD2.filter((x) => !iD.includes(x));

console.log(difference.join("\n"));