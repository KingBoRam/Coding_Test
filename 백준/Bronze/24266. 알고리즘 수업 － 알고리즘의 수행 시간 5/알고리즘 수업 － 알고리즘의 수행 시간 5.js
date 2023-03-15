const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();
let num = BigInt(iD);
console.log(`${num * num * num}`);
console.log(3);
