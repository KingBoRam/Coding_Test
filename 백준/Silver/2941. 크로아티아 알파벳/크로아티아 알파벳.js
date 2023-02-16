const fs = require("fs");

let iD = fs.readFileSync(0).toString().trim();

let A = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < A.length; i++) {
  if (iD.includes(A[i])) {
    iD = iD.split(A[i]).join(0);
  }
}
console.log(iD.length);
