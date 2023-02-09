const fs = require("fs");
const iD = fs.readFileSync(0);

let count = Number(iD);

function han(num) {
  let purse = 0;
  for (let i = 1; i <= num; i++) {
    let strNum = String(i);
    if (strNum.length == 1 || strNum.length == 2) {
      purse++;
    } else if (strNum.length >= 3) {
      let diff = +strNum[1] - +strNum[0];
      for (let j = 2; j < strNum.length; j++) {
        let diff2 = +strNum[j] - +strNum[j - 1];
        if (diff == diff2) {
          purse++;
        }
      }
    }
  }
  console.log(purse);
}

han(count);
