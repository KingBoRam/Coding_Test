const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("");
let sum = 0;
for (let i = 0; i < iD.length; i++) {
  if (iD[i] === "A" || iD[i] === "B" || iD[i] === "C") {
    sum += 3;
  } else if (iD[i] === "D" || iD[i] === "E" || iD[i] === "F") {
    sum += 4;
  } else if (iD[i] === "G" || iD[i] === "H" || iD[i] === "I") {
    sum += 5;
  } else if (iD[i] === "J" || iD[i] === "K" || iD[i] === "L") {
    sum += 6;
  } else if (iD[i] === "M" || iD[i] === "N" || iD[i] === "O") {
    sum += 7;
  } else if (iD[i] === "P" || iD[i] === "Q" || iD[i] === "R" || iD[i] === "S") {
    sum += 8;
  } else if (iD[i] === "T" || iD[i] === "U" || iD[i] === "V") {
    sum += 9;
  } else {
    sum += 10;
  }
}
console.log(sum);
