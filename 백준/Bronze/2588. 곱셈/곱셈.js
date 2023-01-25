const fs = require("fs");

const [inputData1, inputData2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const reverseData = inputData2.toString().split("").reverse().map(Number);
const resultData = reverseData.map((value) => value * inputData1);
resultData.push(inputData1 * inputData2);

console.log(resultData.join("\n"));
