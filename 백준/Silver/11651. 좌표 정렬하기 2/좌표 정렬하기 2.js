const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD[0];
iD.shift();

const arr = [];
for (let i = 0; i < count; i++) {
  arr.push(iD[i].toString().trim().split(" "));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else if (a[1] === b[1]) {
    return a[0] - b[0];
  }
});

const result = [];
for (let i = 0; i < count; i++) {
  let answer = arr[i].join(" ");
  result.push(answer);
}

console.log(result.join("\n"));
