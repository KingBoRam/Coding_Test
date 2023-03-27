const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

let sixarr = [];
let i = 666;
while (sixarr.length <= iD) {
  let str = i.toString();
  if (str.includes("666")) {
    sixarr.push(i);
  }
  i++;
}
console.log(sixarr[iD - 1]);
