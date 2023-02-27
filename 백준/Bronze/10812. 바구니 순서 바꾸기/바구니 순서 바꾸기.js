const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

let count = iD[0].split(" ").map(Number);
let basket = Array.from({ length: count[0] }, (v, i) => i + 1);

for (let i = 1; i <= count[1]; i++) {
  let num = iD[i].split(" ").map(Number);
  let begin = num[0];
  let mid = num[2];
  let end = num[1];
  let cut = basket.splice(begin - 1, mid - begin).reverse();
  for (let j = 0; j < cut.length; j++) {
    basket.splice(begin + end - mid, 0, cut[j]);
  }
}
console.log(basket.join(" "));
