const fs = require("fs");
let iD = fs.readFileSync(0).toString().trim().split("\n");
iD.shift();
let result = iD.sort((a, b) => a - b);
console.log(result.join("\n"));
