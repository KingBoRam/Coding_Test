const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

if (iD % 4 === 0 && (iD % 100 !== 0 || iD % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
