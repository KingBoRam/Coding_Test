const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

console.log((iD * (iD - 1)) / 2);
console.log(2);
