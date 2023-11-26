"use strict";

let str = "aaaaaaaaaaaaaaaaaaaaааааААААААААААrete-*/-.=rtert aaa2222222222ggggggggggg AAAAAAAAAA";

let re = /[^aAаА]{6,}/;

let result = re.test(str);
let result2 = str.match(re);

console.log(result);
console.log(result2);

