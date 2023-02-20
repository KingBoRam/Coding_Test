const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

let iD2 = iD[0].split(" ").map(Number);
let basket = Array.from({ length: iD2[0] }, (v, i) => i + 1);

for (let i = 1; i <= iD2[1]; i++) {
  let arr = iD[i].split(" ").map(Number);
  let A = arr[0] - 1;
  let B = arr[1] - 1;
  let temp = basket[A];
  basket[A] = basket[B];
  basket[B] = temp;
}
console.log(basket.join(" "));
