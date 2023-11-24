"use strict";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(...arr) {
  return arr.sort(function () {
    return 0.5 - Math.random();
  });
}

const result = myBlend(...array);

console.log(result);
