const fs = require("fs");

const iD = fs.readFileSync(0).toString().trim().split("\n");

let count = Number(iD[0]);

for (let i = 1; i <= count; i++) {
  let arr = iD[i].split(" ");
  let times = iD[i][0];
  let alp = arr[1];
  let rep = "";
  for (let j = 0; j < alp.length; j++) {
    rep += alp[j].repeat(times);
  }
  console.log(rep);
}
