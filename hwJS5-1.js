"use strict";

let taurenWarior = {
  strength: 15,
  agility: 10,
  stamina: 25,

  GetInfo: function() {
    return this;
  },
  lvlUp: function(newKey, value) {
    this[newKey] = value;
  },
};

// Tests

console.log(taurenWarior.GetInfo());

taurenWarior.lvlUp("skill", "taunt");

console.log(taurenWarior.GetInfo());

taurenWarior.lvlUp("passive skill", "iron shield");

console.log(taurenWarior.GetInfo());