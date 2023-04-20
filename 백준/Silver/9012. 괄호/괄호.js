const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD.shift();

for (let i = 0; i < count; i++) {
  let arr = iD[i].trim();
  while (arr.includes("()")) {
    arr = arr.replace("()", "");
  }
  if (arr.length > 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
