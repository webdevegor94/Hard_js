let num = 266219;
let array = ("" + num).split("").map(Number);
console.log(array);
let res = array.reduce((acc, rec) => acc * rec);
console.log(res);
let pow = 1296 ** 3;
console.log(pow);
let c = pow.toString();
console.log(c[0]);
console.log(c[1]);