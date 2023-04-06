const fs = require("fs");
const [A, B, C] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (A === B && B === C) {
  console.log(10000 + A * 1000);
} else if (A !== B && B !== C && A !== C) {
  let maxNum = Math.max(A, B, C);
  console.log(maxNum * 100);
} else {
  if (A === B) {
    console.log(1000 + A * 100);
  } else if (A === C) {
    console.log(1000 + A * 100);
  } else if (B === C) {
    console.log(1000 + B * 100);
  }
}
