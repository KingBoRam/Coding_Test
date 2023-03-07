const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim();

let index = +iD;
let path = 0;
let uparr = [];
let downarr = [];

while (index > 0) {
  path++;
  index = index - path;
}

for (let i = 0; i < path; i++) {
  uparr.push(i + 1);
  downarr.push(path - i);
}

if (path % 2 === 0) {
  console.log(`${uparr[path + index - 1]}/${downarr[path + index - 1]}`);
} else {
  console.log(`${downarr[path + index - 1]}/${uparr[path + index - 1]}`);
}
