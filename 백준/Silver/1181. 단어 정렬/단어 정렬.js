const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD[0];
iD.shift();
const arr = [];
for (let i = 0; i < count; i++) {
  let line = iD[i].toString().trim();
  if (arr.includes(line) === false) {
    arr.push(line);
  }
}
arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else if (a.length === b.length) {
    return a.localeCompare(b);
  }
});
console.log(arr.join("\n"));
