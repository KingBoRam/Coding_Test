const fs = require("fs");
const iD = +fs.readFileSync(0);
const result = 2 ** iD + 1;
console.log(result * result);
