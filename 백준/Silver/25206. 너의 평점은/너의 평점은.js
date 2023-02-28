const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
//학점의합
let credit = 0;
for (let i = 0; i < iD.length; i++) {
  let arr = iD[i].trim().split(" ");
  if (arr[2] != "P") {
    credit += Number(arr[1]);
  }
}
//학점x과목평점
let sum = 0;
for (let i = 0; i < iD.length; i++) {
  let arr = iD[i].trim().split(" ");
  let num = Number(arr[1]);
  if (arr[2] == "A+") {
    sum += num * 4.5;
  } else if (arr[2] == "A0") {
    sum += num * 4.0;
  } else if (arr[2] == "B+") {
    sum += num * 3.5;
  } else if (arr[2] == "B0") {
    sum += num * 3.0;
  } else if (arr[2] == "C+") {
    sum += num * 2.5;
  } else if (arr[2] == "C0") {
    sum += num * 2.0;
  } else if (arr[2] == "D+") {
    sum += num * 1.5;
  } else if (arr[2] == "D0") {
    sum += num * 1.0;
  } else if (arr[2] == "F") {
    sum += num * 0.0;
  } else if (arr[2] == "P") {
    sum += 0;
  }
}
console.log((sum / credit).toFixed(6));
