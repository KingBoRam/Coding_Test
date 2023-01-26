const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin");

let result;

if ((inputData % 4 == 0 && inputData % 100 !== 0) || inputData % 400 == 0) {
  result = 1;
} else {
  result = 0;
}
console.log(result);
