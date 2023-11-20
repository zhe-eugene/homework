"use strict";

var services = {
  стрижка: 60,

  гоління: 80,

  "Миття голови": 100,

  setServ: function (newKey, value) {
    this[newKey] = value;
  },
  // setNewSerce
  price: function () {
    let result = 0;

    for (let i in this) {
      if (isNaN(this[i]) === true) {
        continue;
      }
      result += this[i];
    }
    return "Усього за послуги " + result + " грн";
  },

  minPrice: function () {
    let service;
    let num = Infinity;
    for (let key in this) {
      if (num > this[key]) {
        num = this[key];
        service = key;
      }
    }
    return service + " " + num + " грн";
  },

  // minPrice: function(){
  //   let arr = [];
  //   for (let key in this) {
  //     if (isNaN(this[key]) === true) {
  //       continue;
  //     }
  //     if(key !== 'price'){
  //       arr.push(this[key])
  //     }
  //   }
  //   return Math.min(...arr)
  // },
  maxPrice: function () {
    let num = 0;
    let service;
    for (let key in this) {
      if (num < this[key]) {
        num = this[key];
        service = key;
      }
    }
    return service + " " + num + " грн";
  },
  //   maxPrice: function(){
  //     let arr = [];
  //     for (let key in this) {
  //       if (isNaN(this[key]) === true) {
  //         continue;
  //       }
  //         arr.push(this[key])
  //     }
  //     return Math.max(...arr)
  //   },
};

//Tests

services.setServ("Розбити скло", 200);
services.setServ("Термоукладка", 150);
services.setServ("Тату", 150);

let sum = services.price();
console.log(sum);
console.log(services.minPrice());
console.log(services.maxPrice());

services.setServ("Пірсінг", 1500);
services.setServ("стрижка під нуль", 15);

let sum2 = services.price();
console.log(services.minPrice());
console.log(services.maxPrice());
console.log(sum2);
