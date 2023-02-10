const fs = require("fs");

const iD = fs.readFileSync(0).toString();

console.log(iD.charCodeAt(0));
