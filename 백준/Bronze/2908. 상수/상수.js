const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ");

const A = Number(iD[0]);
const B = Number(iD[1]);

function reverse(num) {
  let result = "";
  let one = num % 10;
  let ten = ((num % 100) - (num % 10)) / 10;
  let hund = ((num % 1000) - (num % 100)) / 100;
  result = Number(one.toString() + ten.toString() + hund.toString());
  return result;
}

if (reverse(A) > reverse(B)) {
  console.log(reverse(A));
} else {
  console.log(reverse(B));
}
