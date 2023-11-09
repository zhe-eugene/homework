"use strict";

// ДЗ 1
// Перший спосіб

function drawTriangle1(badge, count) {
  let pictures = "";

  for (let i = 0; i < count; i++) {
    pictures += badge;
    console.log(pictures);
  }
}

drawTriangle1("%", 10);

// Другий спосіб

let drawTriangle2 = (badge, count) => {
  let pictures = "";
  let i = 0;

  while (i < count) {
    pictures += badge;
    console.log(pictures);
    i++;
  }
};

drawTriangle2("+", 5);

// ДЗ 2

let result = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 3 !== 0) {
    result += i;
  }
}
console.log(result);

// ДЗ 3

("use strict");

let pow = function (num1, num2) {
  let result = 1;

  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
};

let message = function (word) {
  console.log(word);
};

let result1 = pow(8, 2);

console.log(result1);
