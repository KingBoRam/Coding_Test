const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

console.log(iD[0][iD[1] - 1]);
