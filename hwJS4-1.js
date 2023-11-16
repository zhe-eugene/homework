"use strict";

// #1

function isNan(value) {
  const type = typeof value;
  const isNumber = Number(value);

  if (value >= 0 || value < 0) {
    return false;
  } else if (type === "boolean" || value === null) {
    return false;
  } else if (isNumber) {
    return false;
  } else if (value === "" || value === " ") {
    return false;
  }

  return true;
}

// Tests

console.log("undefined", isNan(undefined));
console.log("NaN", isNan(NaN));
console.log("Object", isNan(Object));
console.log("{}", isNan({}));

console.log("true", isNan(true));
console.log("false", isNan(false));
console.log("0", isNan(0));
console.log("123", isNan(123));
console.log('"123"', isNan("123"));
console.log('"12345qwert"', isNan("12345qwert"));
console.log('""', isNan(""));
console.log('" "', isNan(""));
console.log('"aa"', isNan("aa"));
console.log("new Date()", isNan(new Date()));
console.log("new Date() - string", isNan(new Date().toString()));
console.log("37", isNan("37"));
console.log("'37.37'", isNan("37.37"));
console.log("'37,37'", isNan("37,37"));
