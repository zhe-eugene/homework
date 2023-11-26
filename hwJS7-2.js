"use strict";

var arr = [
  {
      userName:"Test",
      lastName:"Test",
      email:"test.test@gmail.com"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      email:"dmitro.porohov@yahoo.com"
  },
  {
      userName:"Andrii",
      lastName:"",
      email:"andrii@mail.ru" // Нам такі не підходять
  },
];

let str = JSON.stringify(arr);

let re = /[a-zA-Z0-9.]+@(gmail|yahoo)\.[a-zA-Z0-9_-]+/g;

let result = str.match(re);

console.log(result);
