const fs = require("fs");
const iD = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const count = +iD[0];
iD.shift();

const [quarter, dime, nickel, penny] = [25, 10, 5, 1];

for (let i = 0; i < count; i++) {
  let arr = [];
  let num = iD[i];
  arr.push(parseInt(num / quarter));
  num = num % quarter;
  arr.push(parseInt(num / dime));
  num = num % dime;
  arr.push(parseInt(num / nickel));
  num = num % nickel;
  arr.push(parseInt(num / penny));
  console.log(arr.join(" "));
}

