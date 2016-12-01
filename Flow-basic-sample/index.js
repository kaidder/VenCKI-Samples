// @flow
var message = "Hello Flow";
console.log(message);

console.log(((number1, number2) => number1 * number2)('Im String',20));

let isItCool:boolean;
isItCool = "test";

console.log(((number1: number, number2: number) => number1 * number2)('Im String',20));

((number1, number2):number => number1 + number2)('10',20);
