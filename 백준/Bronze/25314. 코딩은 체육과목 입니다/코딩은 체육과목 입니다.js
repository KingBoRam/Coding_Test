const fs = require("fs");
const iD = Number(fs.readFileSync(0));

let str = "long ";
let str2 = "int";
let num = iD / 4;

console.log(str.repeat(num) + str2);
