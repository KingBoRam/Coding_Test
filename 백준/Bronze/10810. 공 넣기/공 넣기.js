const fs = require("fs");
const iD = fs.readFileSync(0).toString().split("\n");
let iD2 = iD[0].split(" ").map(Number);
let basket = Array.from({ length: iD2[0] }, (v) => 0);

for (let i = 1; i <= iD2[1]; i++) {
  let arr = iD[i].split(" ").map(Number);
  for (let j = arr[0] - 1; j <= arr[1] - 1; j++) {
    basket[j] = arr[2];
  }
}
console.log(basket.join(" "));
