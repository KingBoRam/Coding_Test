const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split(" ");
if (iD[0] === "") {
  console.log(0);
} else {
  console.log(iD.length);
}
