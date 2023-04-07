const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

let sum = 0;
for (let i = 0; i <= iD; i++) {
  sum += i;
}
console.log(sum);
