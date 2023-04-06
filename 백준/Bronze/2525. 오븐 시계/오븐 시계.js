const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const [H, M] = iD[0].toString().trim().split(" ").map(Number);
const M2 = +iD[1];

if (M + M2 < 60) {
  console.log(H + " " + (M + M2));
} else if (M + M2 >= 60) {
  let H2 = Math.floor((M + M2) / 60);
  if (H + H2 >= 24) {
    console.log(H + H2 - 24 + " " + ((M + M2) % 60));
  } else {
    console.log(H + H2 + " " + ((M + M2) % 60));
  }
}
