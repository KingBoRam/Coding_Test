const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("");

let arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

for (let i = 0; i < iD.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (iD[i] == arr[j]) {
      arr[j] = iD.indexOf(iD[i]);
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    arr[i] = -1;
  }
}
console.log(arr.join(" "));
