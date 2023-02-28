const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("");

let str = iD.toString();
let reviD = iD.reverse().toString();

if (str === reviD) {
  console.log(1);
} else {
  console.log(0);
}
