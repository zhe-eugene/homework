"use strict";

function checkProbabilityTheory(count) {
  let countDoubles = 0;
  let countNoDoubles = 0;
  let result;

  for (let i = 0; i < count; i++) {
    let rand = 100 + Math.round(Math.random() * (1000 + 1 - 100));

    if (rand % 2 == 0) {
      countDoubles++;
    }

    if (rand % 2 !== 0) {
      countNoDoubles++;
    }
  }

  if (countDoubles - countNoDoubles == 0) {
    result = "50/50";
  } else if (countDoubles == 0) {
    result = "0/100";
  } else if (countNoDoubles == 0) {
    result = "100/0";
  } else {
    result =
      Math.round((countDoubles / count) * 100) +
      "/" +
      Math.round((countNoDoubles / count) * 100);
  }

  return [
    "Згенерованих парних = " + countDoubles,
    "Згенерованих не парних= " + countNoDoubles,
    "Кількість генерацій " + count,
    "співвідношення = " + result,
  ];
}

console.log(checkProbabilityTheory(100));
