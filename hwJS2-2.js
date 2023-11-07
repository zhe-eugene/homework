"use strict"

let unit = "м";

let value = 15;

let result;

switch (unit) {
    case "км":
        result = value * 1000;
        console.log( value + " " + unit + " це = " + result + " м");
        break;

    case "год":
        result = value * 60;
        console.log( value + " " + unit + " це = " + result + " хв");
        break;

    case "кг":
        result = value * 1000;
        console.log( value + " " + unit + " це = " + result + " г");
        break;

    default:
        console.log("Нажаль в базі данної одиниці вимірювання немає");
        break;

}