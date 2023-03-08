const iD = require("fs").readFileSync(0).toString().trim().split("\n");

const testCase = Number(iD[0]);

for (let i = 1; i <= testCase; i++) {
  let [H, W, N] = iD[i].toString().trim().split(" ").map(Number);
  let count = 0;
  if (H >= N) {
    console.log(`${N}01`);
  } else {
    while (N > 0) {
      N = N - H;
      count++;
    }
    let YY = H + N;
    if (count < 10) {
      console.log(YY + "0" + count);
    } else {
      console.log(`${YY}` + `${count}`);
    }
  }
}
