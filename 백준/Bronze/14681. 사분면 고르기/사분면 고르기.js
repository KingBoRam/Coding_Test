const fs = require("fs");
const [X, Y] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (X > 0) {
  if (Y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else if (X < 0) {
  if (Y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}
