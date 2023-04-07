const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

for (let i = 1; i <= iD; i++) {
  console.log("*".repeat(i));
}
