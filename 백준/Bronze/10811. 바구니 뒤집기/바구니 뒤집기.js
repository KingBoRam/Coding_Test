const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
let count = iD[0].split(" ").map(Number);
let basket = Array.from({ length: count[0] }, (v, i) => i + 1);

for (let i = 1; i <= count[1]; i++) {
  let num = iD[i].split(" ").map(Number);
  let strr = basket.splice(num[0] - 1, num[1] - num[0] + 1);
  for (let j = 0; j < strr.length; j++) {
    basket.splice(num[0] - 1, 0, strr[j]);
  }
}
console.log(basket.join(" "));
