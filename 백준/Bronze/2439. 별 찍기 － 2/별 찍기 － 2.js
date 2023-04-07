const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

for (let i = 1, j = iD - 1; i <= iD, j >= 0; i++, j--) {
  console.log(" ".repeat(j) + "*".repeat(i));
}
