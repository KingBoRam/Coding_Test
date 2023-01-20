const fs=require('fs');

const inputData=parseInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(inputData-543);