const fs = require("fs");
let iD = +fs.readFileSync(0).toString().trim();

let room = 1;
let path = 1;

while (room < iD) {
  room = room + path * 6;
  path++;
}

console.log(path);
