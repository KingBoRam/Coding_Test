const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

for (let i = 1; i <= 9; i++) {
  console.log(iD + " * " + i + " = " + iD * i);
}
