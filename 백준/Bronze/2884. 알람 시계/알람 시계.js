const fs = require("fs");

const inputData = fs.readFileSync(0).toString().split(" ");

let H = Number(inputData[0]);
let M = Number(inputData[1]);

if (M - 45 < 0 && H - 1 < 0) {
  H = H - 1 + 24;
  M = M - 45 + 60;
  console.log(H + " " + M);
} else if (M - 45 >= 0) {
  M = M - 45;
  console.log(H + " " + M);
} else if (M - 45 < 0) {
  H = H - 1;
  M = M - 45 + 60;
  console.log(H + " " + M);
}
