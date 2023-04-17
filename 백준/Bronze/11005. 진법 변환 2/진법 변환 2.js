const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let num = iD[0].toString(iD[1]);
console.log(num.toUpperCase());
