const fs = require("fs");
const [H, M] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (M - 45 >= 0) {
  result = [H, M - 45];
  console.log(H + " " + (M - 45));
} else if (M - 45 < 0) {
  if (H === 0) {
    console.log(23 + " " + (60 - 45 + M));
  } else {
    console.log(H - 1 + " " + (60 - 45 + M));
  }
}
