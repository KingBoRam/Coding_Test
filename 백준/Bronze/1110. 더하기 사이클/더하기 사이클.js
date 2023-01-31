const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("\n");

solution(+iD[0]);
function solution(N) {
  let input = N;
  let inputSum;
  let sum = 0;
  let ten;
  let one;
  while (input != N || sum == 0) {
    if (input >= 10) {
      ten = Math.floor(input / 10);
      one = input % 10; 
    } else {
      ten = 0;
      one = input;
    }
    inputSum = ten + one;
    let inputSumOne;
    if (input >= 10) {
      inputSumOne = inputSum % 10;
    } else {
      inputSumOne = inputSum;
    }
    input = +(String(one) + String(inputSumOne));
    sum++;
  }
  console.log(sum);
}
