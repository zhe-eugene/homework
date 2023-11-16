"use strict";

function pad(text, symbol, count, bool) {
  let concatResult;

  let countSymbol = "";

  for (let i = 0; i < count; i++) {
    countSymbol += symbol;
  }

  if (count <= 5 && count > 0) {
    concatResult = countSymbol;
  } else if (count > 6) {
    concatResult = symbol;
  } else {
    return "Error";
  }

  switch (bool) {
    case true:
      return concatResult.concat(text);
    case false:
      return text.concat(concatResult);
  }
}

// Tests

console.log(pad("qwert", "+", 5, false));

console.log(pad("qwert22", "-", 2, true));

console.log(pad("asassssf", "+", 14, false));

console.log(pad("asassssf", "$", 1522, true));

console.log(pad("asassssf", "$", -1, true));

console.log(pad("asassssf", "$", 0, true));
