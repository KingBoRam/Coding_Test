const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let day = iD[0];
let night = iD[1];
let height = iD[2];

let result = Math.ceil((height - night) / (day - night));
console.log(result);