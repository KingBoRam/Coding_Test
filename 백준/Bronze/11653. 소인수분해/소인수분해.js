const fs = require("fs");
let iD = +fs.readFileSync(0).toString().trim();

//소인수 구하기
let divisor = [];
for (let i = 0; i <= iD; i++) {
  if (iD === 1) {
    break;
  } else if (iD % i === 0) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length === 2) {
      divisor.push(i);
    }
  }
}

//소인수분해
let result = [];
let i = 0;
while (iD > 1) {
  if (iD % divisor[i] === 0) {
    iD = iD / divisor[i];
    result.push(divisor[i]);
  } else {
    i = i + 1;
  }
}

//출력
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
