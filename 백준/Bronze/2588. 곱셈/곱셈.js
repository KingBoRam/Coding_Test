const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split("\n");
const third = parseInt(A) * parseInt(B[2]);
const forth = parseInt(A) * parseInt(B[1]);
const fifth = parseInt(A) * parseInt(B[0]);
const sixth = parseInt(A) * parseInt(B);
const result = [third, forth, fifth, sixth];
console.log(result.join("\n"));
