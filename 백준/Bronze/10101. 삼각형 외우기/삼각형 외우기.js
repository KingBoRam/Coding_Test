const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = iD[0] + iD[1] + iD[2];

if (sum !== 180) {
  console.log("Error");
} else if (iD[0] === 60 && iD[1] === 60 && iD[2] === 60) {
  console.log("Equilateral");
} else if (
  sum === 180 &&
  (iD[0] === iD[1] || iD[0] === iD[2] || iD[1] === iD[2])
) {
  console.log("Isosceles");
} else if (
  sum === 180 &&
  iD[0] !== iD[1] &&
  iD[1] !== iD[2] &&
  iD[0] !== iD[2]
) {
  console.log("Scalene");
}
