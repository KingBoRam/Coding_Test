const fs = require("fs");

const iD = fs.readFileSync(0);

for (i = 1; i <= iD; i++) {
  console.log(" ".repeat(iD - i) + "*".repeat(i));
}
