const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");

const [height, width] = iD[0].split(" ").map(Number);
iD.shift();

const board = [];
for (let i = 0; i < iD.length; i++) {
  board.push(iD[i].toString().trim().split(""));
}

function whiteStart(i, j) {
  let count = 0;
  for (let w = i; w <= i + 7; w++) {
    for (let h = j; h <= j + 7; h++) {
      if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
        if (board[h][w] === "B") {
          count++;
        }
      } else if ((w % 2 === 1 && h % 2 === 0) || (w % 2 === 0 && h % 2 === 1)) {
        if (board[h][w] === "W") {
          count++;
        }
      }
    }
  }
  return count;
}

function blackStart(i, j) {
  let count = 0;
  for (let w = i; w <= i + 7; w++) {
    for (let h = j; h <= j + 7; h++) {
      if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
        if (board[h][w] === "W") {
          count++;
        }
      } else if ((w % 2 === 1 && h % 2 === 0) || (w % 2 === 0 && h % 2 === 1)) {
        if (board[h][w] === "B") {
          count++;
        }
      }
    }
  }
  return count;
}

let result = 0;
for (let i = 0; i + 7 < width; i++) {
  for (let j = 0; j + 7 < height; j++) {
    const white = whiteStart(i, j);
    const black = blackStart(i, j);
    if (i === 0 && j === 0) {
      result = Math.min(white, black);
    } else {
      if (Math.min(white, black) < result) {
        result = Math.min(white, black);
      }
    }
  }
}

console.log(result);
