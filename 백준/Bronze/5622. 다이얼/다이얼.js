const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim();

function changeNum(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("A") || str[i].includes("B") || str[i].includes("C")) {
      result += 3;
    } else if (
      str[i].includes("D") ||
      str[i].includes("E") ||
      str[i].includes("F")
    ) {
      result += 4;
    } else if (
      str[i].includes("G") ||
      str[i].includes("H") ||
      str[i].includes("I")
    ) {
      result += 5;
    } else if (
      str[i].includes("J") ||
      str[i].includes("K") ||
      str[i].includes("L")
    ) {
      result += 6;
    } else if (
      str[i].includes("M") ||
      str[i].includes("N") ||
      str[i].includes("O")
    ) {
      result += 7;
    } else if (
      str[i].includes("P") ||
      str[i].includes("Q") ||
      str[i].includes("R") ||
      str[i].includes("S")
    ) {
      result += 8;
    } else if (
      str[i].includes("T") ||
      str[i].includes("U") ||
      str[i].includes("V")
    ) {
      result += 9;
    } else if (
      str[i].includes("W") ||
      str[i].includes("X") ||
      str[i].includes("Y") ||
      str[i].includes("Z")
    ) {
      result += 10;
    }
  }
  console.log(result);
}

changeNum(iD);
