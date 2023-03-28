const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let count = iD[0];
iD.shift();

//산술평균
let average = iD.reduce((prev, cur) => {
  return (prev += cur);
});
let output = Math.round(average / count);
if (Object.is(output, -0)) {
  output = 0;
}
console.log(output);

//중앙값
let center = iD.sort((a, b) => a - b);
console.log(center[(count - 1) / 2]);

//최빈값
let result = {};
for (let i = 0; i < iD.length; i++) {
  if (result[center[i]] === undefined) {
    result[center[i]] = 1;
  } else {
    result[center[i]] += 1;
  }
}
let maxKey = 0;
let maxValue = 0;
let maxKeys = [];
for (key in result) {
  if (result[key] > maxValue) {
    maxKeys.splice(0);
    maxKey = key;
    maxValue = result[key];
    maxKeys.push(maxKey);
  } else if (result[key] === maxValue) {
    maxKey = key;
    maxKeys.push(maxKey);
  }
}
maxKeys.sort((a, b) => a - b);
if (maxKeys.length > 2) {
  console.log(maxKeys[1]);
} else {
  console.log(maxKey);
}
//범위
console.log(center[count - 1] - center[0]);
