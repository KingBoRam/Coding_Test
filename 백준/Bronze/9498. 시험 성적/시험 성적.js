const fs = require("fs");

const inputData = fs.readFileSync("/dev/stdin");

const result = inputData;

if (100 >= result && result >= 90) {
  console.log("A");
} else if (89 >= result && result >= 80) {
  console.log("B");
} else if (79 >= result && result >= 70) {
  console.log("C");
} else if (69 >= result && result >= 60) {
  console.log("D");
} else {
  console.log("F");
}
