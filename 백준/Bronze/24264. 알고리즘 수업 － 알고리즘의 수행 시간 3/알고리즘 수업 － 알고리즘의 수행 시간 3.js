const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

console.log(iD * iD);
console.log(2);
