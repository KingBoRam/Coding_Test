const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = iD[0] + iD[1] + iD[2];
console.log(sum);
