const fs = require("fs");
const iD = Number(fs.readFileSync(0));

let count = 2 * iD - 1;

for (let i = 1, j = iD - 1; i < count; i += 2, j--) {
  let str = " ".repeat(j) + "*".repeat(i);
  console.log(str);
}
for (let i = 0, j = count; i < iD; i++, j -= 2) {
  let str = " ".repeat(i) + "*".repeat(j);
  console.log(str);
}
