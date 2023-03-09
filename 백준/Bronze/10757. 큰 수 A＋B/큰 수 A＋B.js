const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(BigInt);

let A = iD[0];
let B = iD[1];

console.log((A + B).toString());
