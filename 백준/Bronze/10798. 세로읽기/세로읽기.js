const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => x)
  );

let arr = [];
let maxLength = 0;
let verticalRead = [];
//배열풀기
for (let i = 0; i < iD.length; i++) {
  arr.push(iD[i][0]);
}
//최고길이구하기
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > maxLength) {
    maxLength = arr[i].length;
  }
}
//세로읽기
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    verticalRead.push(arr[j][i]);
  }
}
console.log(verticalRead.join(""));