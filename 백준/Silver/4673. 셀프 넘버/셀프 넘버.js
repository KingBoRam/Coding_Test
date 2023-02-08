function d(iD) {
  let constr = [];
  for (let j = 1; j < iD; j++) {
    let iD = j;
    let con = 0;
    let stringNum = iD.toString();
    for (let i = 0; i < stringNum.length; i++) {
      con += Number(stringNum[i]);
    }
    con += iD;
    constr.push(con);
  }
  let maxNum = Math.max(...constr);
  let selfNum = Array.from({ length: maxNum }, (v, i) => i + 1);
  let difference = selfNum.filter((x) => !constr.includes(x));
  let diff2 = difference.filter((x) => x < 10000);

  console.log(diff2.join("\n"));
}
d(10000);
