const fs = require("fs");
const iD = fs.readFileSync(0).toString().trim().split("\n");
const count = +iD.shift();

const stack = [];
const result = [];

for (let i = 0; i < count; i++) {
  const temp = iD[i].trim().split(" ");

  if (temp[0] === "push") {
    stack.push(+temp[1]);
  } else if (temp[0] === "top") {
    result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  } else if (temp[0] === "size") {
    result.push(stack.length);
  } else if (temp[0] === "pop") {
    result.push(stack.length > 0 ? stack.pop() : -1);
  } else if (temp[0] === "empty") {
    result.push(stack.length > 0 ? 0 : 1);
  }
}

console.log(result.join("\n"));
