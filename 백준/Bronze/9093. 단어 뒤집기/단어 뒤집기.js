const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD.shift();

for (let i = 0; i < count; i++) {
  const temp = iD[i].trim().split(" ");
  const result = [];
  for (let j = 0; j < temp.length; j++) {
    const reversetemp = temp[j].split("").reverse();
    result.push(reversetemp.join(""));
  }
  console.log(result.join(" "));
}
