const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();
const result = iD - 543;
console.log(result);
