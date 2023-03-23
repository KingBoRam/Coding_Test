const fs = require("fs");
const iD = +fs.readFileSync(0).toString().trim();

let arr = [];
for (let i = 0; i < iD; i++) {
  let result = i;
  let num = i.toString();
  for (let j = 0; j < num.length; j++) {
    result += Number(num[j]);
  }
  if (result === iD) {
    arr.push(i);
  }
}
if (arr.length < 1) {
  console.log(0);
} else {
  console.log(arr[0]);
}
