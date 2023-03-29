const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim();

let result = iD.split("").sort((a, b) => b - a);

console.log(result.join(""));
