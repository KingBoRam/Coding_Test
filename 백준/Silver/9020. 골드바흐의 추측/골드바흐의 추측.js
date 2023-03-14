const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= iD[0]; i++) {
  let decimal = [];
  let m = iD[i];
  for (let i = 2; i <= m; i++) {
    decimal[i] = i;
  }
  for (let i = 2; i <= m; i++) {
    if (decimal[i] === 0) continue;
    for (let j = i + i; j <= m; j += i) {
      decimal[j] = 0;
    }
  }
  decimal = decimal.filter((n) => n !== 0);
  let arr = [];
  for (let j = 0; j < decimal.length; j++) {
    if (decimal.includes(iD[i] - decimal[j])) {
      arr.push(decimal[j]);
    }
  }
  while (arr.length > 2) {
    arr.shift();
    arr.pop();
  }
  if (arr.length === 2) {
    console.log(arr.join(" "));
  } else if (arr.length === 1) {
    console.log(arr[0] + " " + arr[0]);
  }
}
