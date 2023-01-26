const fs = require("fs");

const inputData = fs.readFileSync(0).toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

let result;
if (Math.sign(A) > 0 && Math.sign(B) > 0) {
  result = 1;
} else if (Math.sign(A) < 0 && Math.sign(B) > 0) {
  result = 2;
} else if (Math.sign(A) < 0 && Math.sign(B) < 0) {
  result = 3;
} else {
  result = 4;
}
console.log(result);
