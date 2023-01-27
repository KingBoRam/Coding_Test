const fs = require("fs");

const inputData = Number(fs.readFileSync(0));

for (let i = 1; i < 10; i++) {
  console.log(inputData + " * " + i + " = " + inputData * i);
}
