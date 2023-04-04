const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ");
const result = iD + "??!";
console.log(result);
